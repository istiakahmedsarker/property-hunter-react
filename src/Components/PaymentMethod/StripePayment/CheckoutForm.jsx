import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "@stripe/stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [properties, setProperties] = useState(null);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  // This petch is used for the price of property

  useEffect(() => {
    fetch(`https://property-hunter-server.vercel.app/api/v1/properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, []);

  console.log(properties);

   // Fetch the list of countries all name

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryOptions = data.map((country) => ({
          label: country.name.common,
          value: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Calculate the service charge (2%)
    const serviceChargeAmount = Math.ceil(properties.price * 0.02);

    // Deduct the service charge from the total amount
    const totalAmount = properties.price - serviceChargeAmount;

    // Create payment intent with the deducted amount
    const { data: clientSecret, error: paymentIntentError } = await axios.post(
      "https://property-hunter-server.vercel.app/api/v1/create-payment-intent",
      {
        amount: totalAmount,
      }
    );

    if (paymentIntentError) {
      console.error("Error creating payment intent:", paymentIntentError);
      setError("Error creating payment intent");
      return;
    }

    // Confirm payment
    const {
      paymentIntent,
      error: confirmError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.error("Confirm error:", confirmError);
      setError(confirmError.message);
    } else {
      console.log("Payment intent:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction id:", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Save payment in the database
        const payment = {
          email: user.email,
          name: user.displayName,
          country: selectedCountry,
          price: properties.price,
          serviceCharge: serviceChargeAmount,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };

        const res = await axios.post(
          "https://property-hunter-server.vercel.app/api/v1/payment",
          payment
        );

        if (res?.data?.paymentResult?.insertedId) {
          // Send 2% service charge to a specific account
          const serviceChargeTransfer = await stripe.transfers.create({
            amount: serviceChargeAmount,
            currency: "usd",
            destination: "ACCOUNT_ID",
          });

          console.log("Service charge transferred:", serviceChargeTransfer);

          navigate("/dashboard/paymentHistory");
          toast.success(`${user.email} Payment successfully`);
        }
      }
    }
  };
  return (
    <div className="card shrink-0 w-full lg:w-[50%] shadow-2xl bg-base-100 mx-auto p-10 mb-40">
      <h3 className="text-xl font-bold text-center">Stripe Payment Method</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered input-error w-full"
            value={user?.email || ""}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            className="input input-bordered input-error w-full"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select className="select select-error w-full"
          onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option defaultValue>
              Select a Country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* CardElement for card information */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Information
          </label>
          <div className="input input-bordered input-error">
            <CardElement
              className="mt-4"
              options={{
                style: {
                  margin: {
                    top: "2px",
                  },
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        <button
          className="btn btn-sm bg-[#eb6753] text-white mt-10"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-red-500 text-center">{error}</p>
        {transactionId && (
          <p className="text-green-500 text-center">
            Your transaction id: {transactionId}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
