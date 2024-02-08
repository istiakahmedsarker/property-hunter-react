import React, { useEffect, useState } from 'react';
import { MdApartment, MdOutlineHome } from 'react-icons/md';
import { GiVillage } from 'react-icons/gi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import useGetData from '../../Hooks/useGetData';

const ExploreTypes = () => {
  // const [villa, setVilla] = useState();
  // const { data: propertiesData, isPending } = useGetData({
  //   key: ['properties'],
  //   api: `/properties?propertyType=apartment`,
  // });
  // console.log(propertiesData?.properties);
  const handleTypeClick = propertyType => {
    // You can use React Router's useHistory hook here to redirect
    history.push(`/properties?propertyType=${propertyType}`);
  };
  return (
    <div className="w-11/12 mx-auto my-7 ">
      <div className="my-6">
        <h2 className="text-gray-900 text-[28px] md:text-[30px] lg:text-4xl text-center md:text-left font-bold md:mb-3 lg:mb-4">
          Explore Properties Types
        </h2>
        <h3 className="text-sm font-semibold">All Types of Properties</h3>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <Link
          to="/properties?propertyType=house"
          onClick={() => handleTypeClick('house')}
        >
          <div className="px-6 py-7 w-11/12 mx-auto bg-gray-100 rounded-2xl hover:bg-gray-900 transition-all duration-500 ease-in-out hover:text-white shadow-lg shadow-drop-xl">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <MdOutlineHome />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">House</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>
        <Link
          to="/properties?propertyType=apartment"
          onClick={() => handleTypeClick('apartment')}
        >
          <div className="px-6 py-7 w-11/12 mx-auto bg-gray-100 rounded-2xl hover:bg-gray-900 transition-all duration-500 ease-in-out hover:text-white shadow-lg shadow-drop">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <MdApartment />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Apartment</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>

        <Link
          to="/properties?propertyType=villa"
          onClick={() => handleTypeClick('villa')}
        >
          <div className="px-6 py-7 w-11/12 mx-auto bg-gray-100 rounded-2xl hover:bg-gray-900 transition-all duration-500 ease-in-out hover:text-white shadow-lg shadow-drop">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <GiVillage />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Villa</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>

        <Link
          to="/properties?propertyType=office"
          onClick={() => handleTypeClick('office')}
        >
          <div className="px-6 py-7 w-11/12 mx-auto bg-gray-100 rounded-2xl hover:bg-gray-900 transition-all duration-500 ease-in-out hover:text-white shadow-lg shadow-drop">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <HiOutlineBuildingOffice2 />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Office</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreTypes;
