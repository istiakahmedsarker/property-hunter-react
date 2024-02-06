import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KC1ZmI7BqVrKYKIYVF80Hb1NqhbX5uoyqEbLmhhxbzv5S9WRiamVvZ61ghItGwvACUo62jtyjlccMbvZZ5G8mUY00vahoFHuJ"
);

const StripePayment = () => {
  return (
    <div className=" mt-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripePayment;
