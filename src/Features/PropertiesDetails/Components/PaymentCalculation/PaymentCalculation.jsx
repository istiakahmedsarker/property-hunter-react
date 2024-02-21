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

      <h2>
        <span className="font-semibold">Property Price:</span> ${propertyPrice}
      </h2>
      <h3>
        <span className="font-semibold">
          Down Payment(25% of total amount):
        </span>{' '}
        ${calculateDownPayment()}
      </h3>
      <h3>
        <span className="font-semibold">Remaining Amount:</span> $
        {calculateRemainingAmount()}
      </h3>

      {/* Render buttons for installment durations */}
      <div className="flex items-center  gap-5">
        <h3 className="font-semibold">Select your Installment Package :</h3>
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
      {/* Render down payment and installment details */}
      <div className="space-y-4 text-center bg-[#076aa5] text-white px-5 py-7 w-11/12 mx-auto lg:w-2/3 rounded-sm">
        <h3>
          <span className="">Installment Duration : </span>{' '}
          {installmentDuration} Months
        </h3>
        <h3>
          <span className="">
            Interest Amount(5% increase of Remaining amount) :
          </span>{' '}
          $
          {calculateInstallmentAmount() * installmentDuration -
            calculateRemainingAmount()}
        </h3>
        <h3>
          <span className="">Installment Amount : </span> $
          {calculateInstallmentAmount()} Per Month
        </h3>
      </div>
    </div>
  );
};

export default PaymentCalculation;
