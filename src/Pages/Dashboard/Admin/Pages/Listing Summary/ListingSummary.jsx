import React, { useEffect, useState } from 'react';
import { FaCoins, FaHome } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { IoTrophy } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';
import PropertiesStatistics from './Pie Chart/PropertiesStatistics';
import PaymentStatistics from './Line Chart/PaymentStatistics';

const ListingSummary = ({totalPayments,apartment, villa, office, home, isPropertiesLoading, properties}) => {


  return (
    <div className='min-h-screen w-full bg-[#f5f5f5] dark:bg-primary-dark py-10'>
      <div className='space-y-4'>
        <h1 className='text-gray-800 font-bold text-4xl dark:text-white' >Listing Summary</h1>
        <p className='text-gray-600 font-thin text-lg dark:text-white'>Welcome to Your Property Command Center, Admin!</p>
      </div>
      {/*//? Stats */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

        <div className="stats overflow-hidden relative p-4 flex-1 bg-white text-primary-content">
          <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]">
          </div>
          <div className="stat w-full flex items-center gap-6">
            <div className="text-primary-light text-4xl">
              <MdHomeWork />
            </div>

            <div className="flex flex-col items-start gap-1">
              <div className="stat-title text-wrap text-sm text-gray-800">
                Total Properties:
              </div>
              <div className="stat-value text-2xl  text-gray-800">{
                !isPropertiesLoading && properties.length
              }</div>

            </div>
          </div>
        </div>
        <div className="stats overflow-hidden relative flex-1 p-4 bg-[#e0e7da] text-primary-content">
          <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]">
          </div>
          <div className="stat w-full flex items-center gap-6">
            <div className="text-primary-light text-4xl">
              <GiCash />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="stat-title text-wrap text-sm text-gray-800">
                Total Payment Received:
              </div>
              <div className="stat-value text-2xl text-gray-800">${totalPayments}</div>

            </div>
          </div>
        </div>
        <div className="stats overflow-hidden relative flex-1 p-4 bg-white text-primary-content">
          <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]">
          </div>
          <div className="stat  w-full flex items-center gap-6">
            <div className="text-primary-light text-4xl">
              <FaCoins />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="stat-title text-sm text-gray-800 text-wrap">
                Total Commission Earned:
              </div>
              <div className="stat-value text-2xl text-gray-800">
                {totalPayments && `$${(totalPayments * 0.025).toFixed(2)}`}
              </div>

            </div>
          </div>
        </div>
        <div className="stats overflow-hidden relative flex-1 p-4 bg-[#e0e7da] text-primary-content">
          <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]">
          </div>
          <div className="stat w-full flex items-center gap-6">
            <div className="text-primary-light text-4xl">
              <IoTrophy />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="stat-title text-wrap text-sm text-gray-800">
                Number of Properties Sold:
              </div>
              <div className="stat-value text-xl text-gray-800">0</div>

            </div>
          </div>
        </div>

      </div>

      {/*//? Charts */}
      <div className='flex items-center justify-between pb-12 w-full mx-auto'>
        <div className=' space-y-6'>
          <h1 className='text-2xl text-gray-800 font-medium'>Properties Statistics</h1>
          <PropertiesStatistics apartment={apartment.length} villa={villa.length} home={home.length} office={office.length} />
        </div>
        <div className="flex-1">
          {/* <PaymentStatistics payments={payments}/> */}
        </div>
      </div>

    </div>
  );
};

export default ListingSummary;
