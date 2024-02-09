import React from 'react';
import PaymentHistoryTableRow from './PaymentHistoryTableRow';
import useAuth from '../../../../../Hooks/useAuth';

const PaymentHistoryTable = ({paymentHistory = []}) => {

  const {user} = useAuth();
  const MemberPayment = paymentHistory.filter(payment => payment.customer_email === user.email);
  
    return (
      <div className='space-y-6'>
         <h1  className="text-xs w-full md:text-md lg:text-3xl text-left text-gray-800 font-semibold"> 
                    Payment History 
                    <br />
                    <span className='text-xs md:text-sm lg:text-lg text-gray-600 font-thin'>Detailed record of your financial transactions</span>
                    </h1>
        <div className="overflow-x-auto bg-white rounded-xl w-full px-0">
        <table className="table">
          {/* head */}
         
          <thead className="bg-[#e0e7da]">
            {/* <thead className='bg-[#eb6753] '> */}
           
           {MemberPayment.length > 0 ?  <tr className=''>  
              <th className="text-xs text-left md:text-md lg:text-lg text-gray-800 font-bold ">
                Payment Id
              </th>
              <th className="text-xs text-left md:text-md lg:text-lg text-gray-800 font-bold ">
               Status
              </th>
              <th className="text-xs text-left md:text-md lg:text-lg text-gray-800 font-bold ">
               Price
              </th>
              <th className="text-xs text-left md:text-md lg:text-lg text-gray-800 font-bold ">
                Date
              </th> 
            </tr> : <tr>
              </tr>}
          </thead>
          <tbody>
            {/* row */}
            {MemberPayment.length > 0 ? 
              MemberPayment?.map((payment, i) => (
                <PaymentHistoryTableRow key={payment._id} payment={payment}/>
              )) 
              : <div className="min-h-[50vh] w-full flex items-center justify-center">
                <h1 className='text-2xl text-gray-800 text-center font-medium'>No payment has made yet!</h1>
              </div> }
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default PaymentHistoryTable;