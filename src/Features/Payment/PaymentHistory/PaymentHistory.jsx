import React from 'react';
import { ArrowsDownUp, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react';

const fakePaymentData = {
    customer_name: "John Doe",
    transaction_date: new Date(),
    price: 652.0,
    status: 'successful',
};

const PaymentHistory = () => {
    const {customer_name,transaction_date,price,status} = fakePaymentData
    return (
        <table className="w-full border border-collapse border-gray-200">
            <thead>
                <tr className="border-b border-gray-200">
                    <th className="min-w-[290px]">
                        <p className="text-body-6 font-medium text-metal-400">Type</p>
                    </th>
                    <th className="min-w-[183px]">
                        Date <ArrowsDownUp size={14} color="#8897AE" />
                    </th>
                    <th className="min-w-[160px]">
                        Amount <ArrowsDownUp size={14} color="#8897AE" />
                    </th>
                    <th className="min-w-[150px]">
                        Status <ArrowsDownUp size={14} color="#8897AE" />
                    </th>
                    <th className="min-w-[183px]">
                        Received Date <ArrowsDownUp size={14} color="#8897AE" />
                    </th>
                    <th className="min-w-[100px]" />
                </tr>
            </thead>
            <tbody className="divide-gray-25 divide-y">
                <tr className="bg-white">
                    <td>
                        <div className="flex items-center gap-3">
                            {/* Assuming you have an image URL for the company logo */}
                            <img src="/images/company/paypal.png" alt="Paypal Logo" className="w-8 h-8 rounded-full" />
                            <div>
                                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{customer_name}</p>
                                <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        {/* <p className="text-body-5 font-medium text-metal-500">{formattedDate(transaction_date)}</p> */}
                    </td>
                    <td>
                        <p className="text-body-5 font-medium text-metal-500">${price.toFixed(2)}</p>
                    </td>
                    <td>
                        <div className="inline-block">
                            <span className={`px-2 py-1 rounded ${status === 'successful' ? 'bg-success text-white' : 'bg-warning text-black'}`}>
                                {status}
                            </span>
                        </div>
                    </td>
                    <td>
                        {/* <p className="text-body-5 font-medium text-metal-500">{formattedDate(transaction_date)}</p> */}
                    </td>
                </tr>
                {/* ... Additional Table Rows */}
            </tbody>
        </table>
    );
};

export default PaymentHistory;
