import React, { useState } from 'react';
const PaymentCalculation = ({ details }) => {
  const price = details.price;
  // console.log(price);
  const [propertyPrice, setPropertyPrice] = useState(price);
  console.log(propertyPrice);
  const [downPaymentPercentage] = useState(25);
  const [installmentDuration, setInstallmentDuration] = useState(6);

  const calculateDownPayment = () => {
    return (downPaymentPercentage / 100) * propertyPrice;
  };

  const calculateRemainingAmount = () => {
    return propertyPrice - calculateDownPayment();
  };
  const calculateInstallmentAmount = () => {
    let remainingAmount = calculateRemainingAmount();
    if (installmentDuration === 12 || installmentDuration === 24) {
      remainingAmount *= 1.05;
      // Increase amount by 5% for 12 or 24-month installment
    }
    return remainingAmount / installmentDuration;
  };
  const handleInstallmentDuration = duration => {
    setInstallmentDuration(duration);
  };
  return (
    <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6  space-y-4">
      <h3 className="text-xl  font-semibold py-5">Payment System</h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="space-y-3">
          <h2>
            <span className="font-semibold">Property Price:</span> $
            {propertyPrice}
          </h2>
          <h3>
            <span className="font-semibold">
              Down Payment (25% of total amount):
            </span>{' '}
            ${calculateDownPayment()}
          </h3>
          <h3>
            <span className="font-semibold">Remaining Amount:</span> $
            {calculateRemainingAmount()}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <img className="h-20 w-30" src={details.propertyImages[0]} alt="" />
          <img className="h-20 w-30" src={details.propertyImages[1]} alt="" />
          <img className="h-20 w-30" src={details.propertyImages[2]} alt="" />
        </div>
      </div>

      {/* Render buttons for installment durations */}
      <div className="flex items-center flex-col  gap-5">
        <h3 className="font-bold mt-5">Select your Installment Package </h3>
        <div className="flex justify-center items-center gap-5">
          {' '}
          <button
            className={`${
              installmentDuration === 6
                ? 'bg-white text-black border-blue-500 border-2'
                : 'bg-blue-500 text-white'
            } rounded-r-none px-4 focus:border-blue-500  py-3 rounded-sm`}
            onClick={() => handleInstallmentDuration(6)}
          >
            06 Month
          </button>
          <button
            className={`${
              installmentDuration === 12
                ? 'bg-white text-black border-blue-500 border-2'
                : 'bg-blue-500 text-white'
            } rounded-r-none focus:border-blue-500   px-4 py-3 rounded-sm`}
            onClick={() => handleInstallmentDuration(12)}
          >
            12 Month
          </button>
          <button
            className={`${
              installmentDuration === 24
                ? 'bg-white text-black border-blue-500 border-2'
                : 'bg-blue-500 text-white'
            } rounded-r-none focus:border-blue-500 px-4 py-3 rounded-sm`}
            onClick={() => handleInstallmentDuration(24)}
          >
            24 Month
          </button>
        </div>
      </div>
      {/* Render down payment and installment details */}
      <div className="  text-black px-5 py-7 w-11/12 mx-auto  rounded-sm grid grid-cols-3 ">
        <div className="border-blue-500 border-r-2 border-l-2 px-5">
          <h3>
            <span className="font-semibold">Installment Duration : </span>{' '}
            {installmentDuration} Months
          </h3>
        </div>

        <div className="border-blue-500 border-r-2 px-5">
          <h3>
            <span className="font-semibold">
              Interest Amount (5% increase of Remaining amount) :
            </span>{' '}
            $
            {calculateInstallmentAmount() * installmentDuration -
              calculateRemainingAmount()}
          </h3>
        </div>
        <div className="border-blue-500 border-r-2 px-5">
          {' '}
          <h3>
            <span className=" font-semibold">Installment Amount : </span> $
            {calculateInstallmentAmount()} Per Month
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculation;