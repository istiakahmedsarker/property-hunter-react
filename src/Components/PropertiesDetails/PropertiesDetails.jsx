import React, { useEffect, useState } from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import { IoArrowUpOutline, IoBedOutline, IoHomeOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import { IoCalendarClearOutline } from 'react-icons/io5';
import AddProperties from '../../Pages/AddProperties/AddProperties';
import BuyerInquiryForm from './Buyer Inquiry Form/BuyerInquiryForm';
import TopButton from '../Shared/TopButton/TopButton';

const PropertiesDetails = () => {
  const cardDetails = useLoaderData();

  const details = cardDetails?.data?.property || {};
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = details.location.latitude;
    const lon = details.location.longitude;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  console.log(details);
  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:w-1/3 w-full my-3">
        <h3 className="font-semibold text-xl">{details.propertyTitle}</h3>
        <h3 className="flex gap-3">
          <span> {details.location.city},</span>
          <span>{details.location.state}</span>
        </h3>
        <div className=" flex gap-5 ">
          <h3 className="flex items-center gap-3">
            <IoBedOutline />
            {details.bedroom} Bed
          </h3>
          <h3 className="flex items-center  gap-3">
            <PiBathtub />
            {details.bathroom} Bath
          </h3>
          <h3 className="flex items-center  gap-3">
            <BiShapeSquare />
            {details.squareFootage} sq Ft
          </h3>
        </div>
      </div>
      <div>
        {/* image */}
        {details.propertyImages && details.propertyImages.length > 0 && (
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 space-y-4">
            <div className="h-full">
              <img
                src={details.propertyImages[0]}
                alt={details.propertyTitle}
                className="w-11/12 mx-auto h-full rounded-lg "
              ></img>
            </div>
            <div className="grid grid-cols-1 space-y-4 ">
              <div className="">
                <img
                  src={details.propertyImages[1]}
                  alt={details.propertyTitle}
                  className="w-11/12 mx-auto h-56  rounded-lg "
                />
              </div>

              <div>
                <img
                  src={details.propertyImages[2]}
                  alt={details.propertyTitle}
                  className="w-11/12 mx-auto h-56 rounded-lg "
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex lg:flex-row flex-col gap-5 ">
        <div className="lg:w-2/3 w-full">
          {/* overview */}
          <div className="w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            <h3 className="text-xl font-semibold py-5">Overview</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6">
              <div className="flex items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <IoBedOutline />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Bedroom</h3>
                  <h3>{details.bedroom}</h3>
                </div>
              </div>
              <div className="flex  items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <PiBathtub />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Bathroom</h3>
                  <h3>{details.bathroom}</h3>
                </div>
              </div>
              <div className="flex  items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <IoCalendarClearOutline />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Year of Build</h3>
                  <h3>{details.yearBuilt}</h3>
                </div>
              </div>
              <div className="flex  items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <BiSolidCarGarage />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Garage</h3>
                  <h3>{details.parking.spaces} sq Ft</h3>
                </div>
              </div>
              <div className="flex  items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <BiShapeSquare />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Square Ft</h3>
                  <h3>{details.squareFootage}</h3>
                </div>
              </div>
              <div className="flex  items-center gap-5">
                <div>
                  <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                    <IoHomeOutline />
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">Property Type</h3>
                  <h3>{details.propertyType}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* properties Description */}
          <div className="w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            <h3 className="text-xl  font-semibold py-5">
              Properties Description
            </h3>
            {/* see more implementation */}
            <p className="">
              {showFullDescription
                ? details.description
                : `${details.description.slice(0, 200)}${
                    details.description.length > 200 ? '...' : ''
                  }`}
            </p>
            {details.description.length > 200 && (
              <button className="text-blue-800" onClick={toggleDescription}>
                {showFullDescription ? 'See less' : 'See more'}
              </button>
            )}

            <div className="">
              {/* properties details */}
              <h3 className="text-xl font-semibold py-5">Properties Details</h3>
              <div className="grid grid-cols-2  lg:gap-5 gap-2">
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Price</span>
                  <span>: $ {details.price}</span>
                </h3>
                {/* parking need to be conditional */}
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Garage Size</span>
                  <span>: {details.parking.spaces}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Bedroom</span>
                  <span>: {details.bedroom}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Bathroom</span>
                  <span>: {details.bathroom}</span>
                </h3>
                {/*  */}
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">property Size</span>
                  <span>: {details.squareFootage} sq Ft</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Year of Build </span>
                  <span>: {details.yearBuilt} </span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">property Type </span>
                  <span>: {details.propertyType}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">property Status </span>
                  <span>: {details.propertyStatus}</span>
                </h3>
              </div>
            </div>
          </div>
          {/* property feature */}
          <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Properties Features</h3>
            <li className="py-2">{details.easement[0]}</li>
            <li className="py-2">{details.easement[1]}</li>
            <li className="py-2">{details.easement[2]}</li>
          </div>
          {/* properties utilities */}
          <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Utilities</h3>
            <li className="py-2">{details.utilities[0]}</li>
            <li className="py-2">{details.utilities[1]}</li>
            <li className="py-2">{details.utilities[2]}</li>
          </div>
          {/* properties Address */}
          <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Address</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3 className="grid grid-cols-2 py-2">
                  <span> Address</span>
                  <span>: {details.location.address}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-2">
                  <span> City</span> <span>: {details.location.city}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-2">
                  <span> State</span> <span>: {details.location.state}</span>
                </h3>
              </div>
            </div>
            {/* map section */}
            <div className="rounded-lg my-4">
              <iframe
                className="rounded-lg "
                id="iframeId"
                height="400px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          {/* owner information */}
          <div className="w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            <h3 className="text-xl font-semibold py-5">Owner address</h3>
            <div>
              <h3 className="flex gap-5 py-2">
                <span> Name</span>
                <span>: {details.ownerInformation.name}</span>
              </h3>
              <h3 className="flex gap-5 py-2">
                <span> Email</span>
                <span>: {details.ownerInformation.email}</span>
              </h3>
              <h3 className="flex gap-5 py-2">
                <span> Phone</span>
                <span>: {details.ownerInformation.phone}</span>
              </h3>
            </div>
          </div>
          {/*from open  */}
          <div>
            <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
              <h3 className="text-xl font-semibold py-5">
                Essential information Submit
              </h3>
              <button
                className="bg-[#eb6753] text-white px-4 py-2 rounded"
                onClick={toggleForm}
              >
                {isFormOpen ? 'Close Form' : 'Open Form'}
              </button>

              {isFormOpen && <BuyerInquiryForm />}
            </div>
          </div>
        </div>
      </div>
      {/* for scroll to top button */}
      <TopButton></TopButton>
    </div>
  );
};

export default PropertiesDetails;
