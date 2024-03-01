import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51KC1ZmI7BqVrKYKIYVF80Hb1NqhbX5uoyqEbLmhhxbzv5S9WRiamVvZ61ghItGwvACUo62jtyjlccMbvZZ5G8mUY00vahoFHuJ"
);

const StripePayment = () => {
  const checkOutProperty = useLoaderData();


  const propertyId = checkOutProperty?.data?.data?.buyer_property_id;
  const ownerEmail = checkOutProperty?.data?.data?.buyer_property_ownerEmail;

  const price = checkOutProperty?.data?.data?.buyer_property_price;
  const propertyPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const serviceChargeCut = Math.ceil(price * 0.02);
  const serviceCharge = serviceChargeCut.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalPrice = price + serviceChargeCut;
  const totalPropertyPrice = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div className=" flex flex-col lg:flex-row-reverse justify-center mt-4 relative mx-auto ">
        <div className="bg-gray-100 p-6 rounded-md flex-1 z-0">
          <h2 className="text-4xl font-extrabold text-primary-light">
            {totalPropertyPrice}
          </h2>
          <ul className="text-[#333] mt-10 space-y-6">
            <li className="flex flex-wrap gap-4 text-base">
              Property Price{" "}
              <span className="ml-auto font-bold">{propertyPrice}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Service Charge{" "}
              <span className="ml-auto font-bold">{serviceCharge}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 text-primary-light pt-4">
              Total <span className="ml-auto">{totalPropertyPrice}</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 z-40">
          <Elements stripe={stripePromise}>
            <CheckoutForm 
            totalPrice={totalPrice}
            propertyId={propertyId}
            ownerEmail={ownerEmail} 
            />
          </Elements>
        </div>
      </div>
      <div className="hidden lg:inline-block">
        <img
          src="https://i.ibb.co/g6qqty7/Payment-Information-rafiki-1.png"
          alt=""
          className=" max-w-[40%] opacity-25 absolute bottom-0 top-40 right-80  z-10"
        />
      </div>
    </div>
  );
};

export default StripePayment;
