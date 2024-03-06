import React, { useState } from 'react';
const PaymentCalculation = ({ details }) => {
  const price = details.price;
  // console.log(price);
  const [propertyPrice] = useState(price);
  // console.log(propertyPrice);
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
    <div>
      <h3 className="text-xl md:text-2xl dark:text-in-dark text-gray-800 font-semibold py-5 pb-7">
        Payment System
      </h3>
      <div className="w-full border-2 dark:text-in-dark border-gray-100 text-sm space-y-4 rounded-xl px-4 py-5 dark:border-none dark:bg-card-dark">
        <div className="grid lg:grid-cols-2 dark:text-in-dark grid-cols-1 gap-5">
          <div className="space-y-3 text-[16px]">
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
            <img
              className="h-20 w-30 rounded-xl"
              src={details.propertyImages[0]}
              alt=""
            />
            <img
              className="h-20 w-30 rounded-xl"
              src={details.propertyImages[1]}
              alt=""
            />
            <img
              className="h-20 w-30 rounded-xl"
              src={details.propertyImages[2]}
              alt=""
            />
          </div>
        </div>

        {/* Render buttons for installment durations */}
        <div className="flex items-center dark:text-in-dark flex-col  gap-5">
          <h3 className="font-bold mt-5">Select your Installment Package </h3>
          <div className="flex justify-center items-center gap-5">
            {' '}
            <button
              className={`${
                installmentDuration === 6
                  ? 'bg-white text-black border-primary-light border-2'
                  : 'bg-primary-light text-white'
              } rounded-r-none px-4 focus:border-primary-light  py-3 rounded-sm`}
              onClick={() => handleInstallmentDuration(6)}
            >
              06 Month
            </button>
            <button
              className={`${
                installmentDuration === 12
                  ? 'bg-white text-black border-primary-light border-2'
                  : 'bg-primary-light text-white'
              } rounded-r-none focus:border-primary-light   px-4 py-3 rounded-sm`}
              onClick={() => handleInstallmentDuration(12)}
            >
              12 Month
            </button>
            <button
              className={`${
                installmentDuration === 24
                  ? 'bg-white text-black border-primary-light border-2'
                  : 'bg-primary-light text-white'
              }  focus:border-primary-light px-4 py-3 rounded-sm`}
              onClick={() => handleInstallmentDuration(24)}
            >
              24 Month
            </button>
          </div>
        </div>
        {/* Render down payment and installment details */}
        <div className="  text-black dark:text-in-dark px-5 py-7 lg:w-11/12 w-full mx-auto  rounded-sm grid grid-cols-3 ">
          <div className="border-primary-light border-r-2 border-l-2 lg:px-5 px-2">
            <h3 className="text-sm lg:text-sm">
              <span className="font-semibold ">Installment Duration : </span>{' '}
              {installmentDuration} Months
            </h3>
          </div>

          <div className="border-primary-light border-r-2 lg:px-5 px-2">
            <h3 className="text-sm lg:text-sm">
              <span className="font-semibold">
                Interest Amount (5% increase of Remaining amount) :
              </span>{' '}
              $
              {calculateInstallmentAmount() * installmentDuration -
                calculateRemainingAmount()}
            </h3>
          </div>
          <div className="border-primary-light border-r-2 lg:px-5 px-2">
            {' '}
            <h3 className="text-sm lg:text-sm">
              <span className=" font-semibold">Installment Amount : </span> $
              {calculateInstallmentAmount()} Per Month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculation;
