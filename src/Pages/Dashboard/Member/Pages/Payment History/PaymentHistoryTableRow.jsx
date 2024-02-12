import React from 'react';
import { FaClock } from 'react-icons/fa';

const PaymentHistoryTableRow = ({payment = {}, index}) => {

  const{ country, customer_email,customer_name,price,status,transaction_date,transaction_id} = payment || {};
  
  //? Format date
  function formatDate(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateObj = new Date(inputDate);

    const month = months[dateObj.getMonth()];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

    return `${month} ${date}, ${year}, ${formattedTime}`;
}
 
const creation_data = formatDate(transaction_date);
    return (
        <tr className={``}>
      
      <td className='text-xs text-left  md:text-xs lg:text-md  xl:text-lg font-normal'>
        {transaction_id}
      </td>
      <td className={`text-xs ${status === 'pending' && "text-[#B5850B]"} ${status === 'success' && "text-[#165E3D]"} text-left md:text-xs lg:text-md  xl:text-lg font-normal`}>
        {status === "pending" && <p className='flex items-center justify-start gap-3'><FaClock/>{status}</p> }
      </td>
      <td className="text-xs text-left md:text-xs lg:text-sm xl:text-lg">{price}</td>
      <td className="text-xs text-left md:text-xs lg:text-sm xl:text-lg">{creation_data}</td>
     
    </tr>
    );
};

export default PaymentHistoryTableRow;