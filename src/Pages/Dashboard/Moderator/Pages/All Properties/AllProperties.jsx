import React, { useEffect } from "react";
import GetAllProperties from "../../Services/GetAllProperties";
import Table from "./Table";
import './style.css';

const AllProperties = () => {
  const { properties } = GetAllProperties();
  
  return (
    <div className="min-h-screen w-full relative py-0 px-6">
       <div className="flex lg:mx-0 items-center justify-between relative h-[40vh] w-full rounded-md bg-[url('https://res.cloudinary.com/debqyv4o6/image/upload/v1705426954/Vector_11_skdxn1.png')] backdrop-blur-2xl bg-right-bottom bg-cover mb-12">
        <div className="h-full w-full absolute z-0 backdrop-blur-[100px]"></div>
         <div className="relative z-10 flex-1 h-full lg:p-6  bg-[#ffffff85] w-full min-h-[40vh]  flex items-center justify-start ">
         <div className="fade-in-left ml-6">
         <h1 className="text-2xl lg:text-4xl text-gray-900 text-left font-medium mb-2">
          Welcome back!
        </h1>
        <p className="text-md lg:text-xl text-gray-600 font-thin">Manage all the properties.</p>
         </div>
         </div>
         <div className="relative z-10 flex-1 h-full bg-[#ffffff85]  w-full flex items-center justify-center">
         <img className="fade-in-right w-full h-full object-contain" src="https://i.ibb.co/bdgZ8HZ/Remove-bg-ai-1706092943375.png" alt="" />
         </div>
       </div>
       
      <div className="relative w-full z-10 px-6 lg:px-0 py-0 flex flex-col items-start gap-2">

        {/* Table */}
        <h1 className=" text-md xl:text-2xl lg:text-xl text-gray-900 font-medium mb-2 text-center">
          All Properties
        </h1>

       <Table properties={properties}/>
      </div>
    </div>
  );
};

export default AllProperties;
