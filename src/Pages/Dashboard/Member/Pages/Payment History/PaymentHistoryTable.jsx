import React from 'react';

const PaymentHistoryTable = ({paymentHistory = []}) => {
    return (
        <div className="overflow-x-auto bg-white rounded-xl w-full px-0">
        <table className="table">
          {/* head */}
          <thead className="bg-[#e0e7da]">
            {/* <thead className='bg-[#eb6753] '> */}
            <tr className=''>
                <th className="text-xs md:text-md lg:text-xl text-left text-gray-800 font-semibold"> 
                    Payment History 
                    <br />
                    <span className='text-xs md:text-sm lg:text-sm text-gray-600 font-thin'>Detailed record of your financial transactions</span>
                    </th>
                {/* 
              {/* <th>
                <label></label>
              </th>
              <th className="text-xs md:text-md lg:text-lg text-gray-800 font-bold ">
                Property
              </th>
              <th className="text-xs md:text-md lg:text-lg text-gray-800 font-bold ">
                Owner
              </th>
              <th className="text-xs md:text-md lg:text-lg text-gray-800 font-bold ">
                Status
              </th>
              <th className="text-xs md:text-md lg:text-lg text-center text-gray-800 font-bold ">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {paymentHistory.length > 0 ? <p>Data</p>
            //   paymentHistory?.map((prop, i) => (
            //     // <TableRow index={i} key={prop?._id} />
            //   )) 
              : <div className="min-h-[50vh] flex items-center justify-center">
                <h1 className='text-2xl text-gray-800 text-center font-medium'>No payment made yet!</h1>
              </div> }
          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistoryTable;