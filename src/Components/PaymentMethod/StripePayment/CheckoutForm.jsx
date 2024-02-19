import {
  AddressElement,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";


const CheckoutForm = ({ totalPrice: totalAmount }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const instance = useAxios();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function cardFromData() {
      if (totalAmount > 0) {
        await instance.post("/create-payment-intent", { price: totalAmount })
          .then((res) => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
      }
    }

    cardFromData();
  }, [instance, totalAmount]);

  console.log("Address:", address, "name:", name);



  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("event", event.target.value);

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
      // console.log("payment error", error);
      setError(error.message);
    } else {
      // console.log("payment method", paymentMethod);
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
      // console.log("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        // console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);



        // Save the payment in the database
        const payment = {
          customer_name: String(name),
          customer_email: user.email,
          transaction_id: paymentIntent.id,
          transaction_date: new Date(),
          price: totalAmount,
          status: 'successful',
          country: address?.country,
        }

        const res = await instance.post('/payments', payment)

        // console.log('payment save in the data base', res);

        if (res?.data?.status === "success") {

          console.log('Payment successfully');
          // navigate('/dashboard/paymentHistory');
          toast.success(`${user.email} Payment successfully`);
        }
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 rounded-md card">
      <h3 className="text-2xl font-semibold text-center text-[#eb6753]">Stripe Payment Gateway</h3>
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-sans text-stone-600">Card Number</span>
          </label>
          <div className="input input-bordered rounded">
            <CardElement className="mt-[16px]" />
          </div>
        </div>
        <div className="mt-3">
          <AddressElement options={{ mode: "shipping" }}
            onChange={(event) => {
              if (event.complete) {
                setAddress(event.value.address);
                setName(event.value.name)
              }
            }}
          />
        </div>
        <div className="mt-5">
          <button type="submit"
            disabled={!stripe || !clientSecret}
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
