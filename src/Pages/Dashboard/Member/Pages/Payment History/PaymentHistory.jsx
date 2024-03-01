import React from 'react';
import Container from '../../../../../Components/Container/Container';
import { MdHomeWork } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { FaFileInvoice } from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';
import PaymentHistoryTable from './PaymentHistoryTable';
import GetAllPayments from '../../../../../Components/Services/GetAllPayments';
import PageTitle from '../../../../../Features/PageTitle/PageTitle';

const PaymentHistory = () => {
  const { payments } = GetAllPayments();
  // console.log(payments);
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      <PageTitle title="Property Hunter || Payment History"></PageTitle>
      <Container>
        {/*//? banner */}
        <div className="relative overflow-hidden min-h-[15vh] w-full flex rounded-xl bg-gradient-to-r from-[#e0e7da]  via-[#ffffff] to-[#fbe0dc]">
          {/* <div className="min-h-[30vh] w-full flex rounded-xl bg-gradient-to-r from-[#ffffff] via-[#fdfdfd] to-[#fbfbfb]"> */}
          <div className="h-[30vh]  w-[50%] flex-1">
            <img
              src="https://i.ibb.co/tsfdctY/House-searching-cuate.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 space-x-0 lg:space-y-2 p-12 w-[50%]">
            <h1 className=" md:text-xl lg:text-4xl font-semibold text-gray-900">
              Payment History
            </h1>
            <h3 className=" md:text-sm ml-0 lg:text-xl font-thin text-gray-700">
              Track Your Transactions: Payment History Insights
            </h3>
          </div>

          <div className="absolute top-0 -right-10 h-[50%] w-[10%] rounded-xl opacity-100 rotate-[45deg] bg-[#fafafada] backdrop-blur-[600px] rounded-tr-xl rounded-bl-[9999]"></div>
        </div>
        {/*//? Stats */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="stats overflow-hidden relative p-4 flex-1 bg-[#eb6753] text-primary-content">
            <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]"></div>
            <div className="stat  w-full flex items-center gap-6">
              <div className="text-white text-4xl">
                <MdHomeWork />
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="stat-title text-wrap text-sm text-white">
                  Total Properties Bought:
                </div>
                <div className="stat-value text-2xl  text-white">0</div>
              </div>
            </div>
          </div>
          <div className="stats overflow-hidden relative flex-1 p-4 bg-[#e0e7da] text-primary-content">
            <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]"></div>
            <div className="stat w-full flex items-center gap-6">
              <div className="text-gray-800 text-4xl">
                <GiCash />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="stat-title text-wrap text-sm text-gray-800">
                  Current Portfolio Value:
                </div>
                <div className="stat-value text-2xl text-gray-800">0</div>
              </div>
            </div>
          </div>
          <div className="stats overflow-hidden relative flex-1 p-4 bg-[#eb6753] text-primary-content">
            <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]"></div>
            <div className="stat  w-full flex items-center gap-6">
              <div className="text-white text-4xl">
                <FaFileInvoice />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="stat-title text-clip text-sm text-white">
                  Total invoices :
                </div>
                <div className="stat-value text-2xl text-white">0</div>
              </div>
            </div>
          </div>
          <div className="stats overflow-hidden relative flex-1 p-4 bg-[#e0e7da] text-primary-content">
            <div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]"></div>
            <div className="stat w-full flex items-center gap-6">
              <div className="text-gray-800 text-4xl">
                <IoBarChart />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="stat-title text-wrap text-sm text-gray-800">
                  Average Purchase Price:
                </div>
                <div className="stat-value text-xl text-gray-800">0</div>
              </div>
            </div>
          </div>
        </div>

        {/*//? Payment history Table */}
        <PaymentHistoryTable paymentHistory={payments} />
      </Container>
    </div>
  );
};

export default PaymentHistory;
