import {
  AddressElement,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";


const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();
  const amount = 1000;
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const instance = useAxios();

  // Calculate 2% service charge
        const serviceCharge = Math.ceil(amount * 0.02);
  
        // Deduct service charge from the payment
        const amountAfterServiceCharge = amount - serviceCharge;

        // pay total amount
        const totalAmount = amount + serviceCharge;

  useEffect(() => {
    async function cardFromData() {
      if (totalAmount > 0) {
        await instance.post("/create-payment-intent", { price: totalAmount })
          .then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
      }
    }

    cardFromData();
  }, [instance,totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("event", event.target.value);
  
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
  
    if (card === null) {
      return;
    }
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
  
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
  
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
  

  
        // Save the payment in the database
        const payment = {
          email: user.email,
          price: amountAfterServiceCharge,
          serviceCharge: serviceCharge,
          totalAmount: totalAmount,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js
          status: 'pending'
        }
  
        const res = await instance.post('/payments', payment)
  
        console.log('payment save in the data base', res);
  
        if (res?.data?.paymentResult?.insertedId) {
          
          console.log('Payment successfully');
          navigate('/dashboard/paymentHistory');
          toast.success(`${user.email} Payment successfully`);
        }
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 border rounded-md card shadow-2xl bg-base-100 ">
      
          <h3 className="text-2xl font-semibold text-center text-[#eb6753]">Stripe Payment Gateway</h3>
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-sans text-stone-600">Card Number</span>
          </label>
          <div className="input input-bordered rounded">
            <CardElement className=" mt-[16px]" />
          </div>
        </div>
        {/* <div className="flex flex-row gap-2">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-sans text-stone-600">CVC</span>
            </label>
            <div className=" input input-bordered rounded">
              <CardCvcElement className=" mt-[16px]" />
            </div>
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-sans text-stone-600">Expiry</span>
            </label>
            <div className=" input input-bordered rounded">
              <CardExpiryElement className=" mt-[16px]" />
            </div>
          </div>
        </div> */}
        <div className="mt-3">
          <AddressElement options={{ mode: "shipping",
        defaultValues: {
          name: 'Jane Doe',
          address: {
            line1: '354 Oyster Point Blvd',
            line2: '',
            city: 'South San Francisco',
            state: 'CA',
            postal_code: '94080',
            country: 'US',
          },
        }, }}
         />
        </div>
        <div className="mt-5">
          <button type="submit" 
          // disabled={!stripe || !clientSecret}
          className="btn btn-sm bg-[#eb6753] text-white">
            Pay Now
          </button>
          <p className="text-red-500 text-center">{error}</p>
        {transactionId && <p className="text-green-500 text-center">Your transaction id: {transactionId} </p>}
        </div>
      </form>
        </div>
  );
};
export default CheckoutForm;
