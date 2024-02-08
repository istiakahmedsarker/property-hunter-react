import React, { useEffect, useState } from 'react';
import { FaCoins, FaHome } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { IoTrophy } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';
import GetAllProperties from '../../../Moderator/Services/GetAllProperties';
import GetAllPayments from '../../../../../Components/Services/GetAllPayments';
import PropertiesStatistics from './Pie Chart/PropertiesStatistics';



const ListingSummary = () => {
    const [totalPayments, setTotalPayments] = useState(0);
    const [apartment, setTotalApartment] = useState(0);
    const [villa, setTotalVilla] = useState(0);
    const [office, setTotalOffice] = useState(0);
    const [home, setTotalHome] = useState(0);
   
      const {properties, isLoading : isPropertiesLoading} = GetAllProperties();
      const {payments, isLoading : isPaymentsLoading } = GetAllPayments();
     
  useEffect(() => {
    if (!isPaymentsLoading) {
      const totalPayments = payments.reduce((prev, curr) => {
       
        if (curr.amount !== undefined) {
          return prev + curr.amount;
        } else if (curr.price !== undefined) {
          return prev + curr.price;
        } else {
          return prev;
        }
      }, 0);
      
      setTotalPayments(totalPayments);
    }

    if(!isPropertiesLoading) {
      const villa = properties.filter((property) => {
        return property.propertyType === "villa";
      });
      const home = properties.filter((property) => {
        return property.propertyType === "home";
      });
      const apartment = properties.filter((property) => {
        return property.propertyType === "apartment";
      });
      const office = properties.filter((property) => {
        return property.propertyType === "office";
      });

      setTotalApartment(apartment);
      setTotalHome(home);
      setTotalOffice(office);
      setTotalVilla(villa);
    }
  }, [isPaymentsLoading, payments, isPropertiesLoading, properties]); 
  console.log(totalPayments);
  
  
    return (
        <div className='min-h-screen w-full bg-[#f5f5f5] py-10'>
            <div className='space-y-4'>
                <h1 className='text-gray-800 font-bold text-4xl' >Listing Summary</h1>
                <p className='text-gray-600 font-thin text-lg'>Welcome to Your Property Command Center, Admin!</p>
            </div>
            {/*//? Stats */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="stats overflow-hidden relative p-4 flex-1 bg-white text-primary-content">
<div className="absolute top-0 right-0 h-[50%] w-[30%] rounded-xl opacity-30 rotate-[45deg] bg-[#ffffff] backdrop-blur-[400px] rounded-tr-xl rounded-bl-[9999]">
          </div>
  <div className="stat  w-full flex items-center gap-6">
    <div className="text-[#eb6753] text-4xl">
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
    <div className="text-[#eb6753] text-4xl">
      <GiCash/>
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
    <div className="text-[#eb6753] text-4xl">
      <FaCoins/>
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
    <div className="text-[#eb6753] text-4xl">
      <IoTrophy/>
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
       <div className='flex items-center justify-between pb-12 w-full'>
          <div className=' space-y-6'>
            <h1 className='text-2xl text-gray-800 font-medium'>Properties Statistics</h1>
            <PropertiesStatistics apartment={apartment.length} villa={villa.length} home={home.length} office={office.length}/>
          </div>
          <div className="flex-1">
          
          </div>
       </div>

        </div>
    );
};

export default ListingSummary;