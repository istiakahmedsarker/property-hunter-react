import React, { useState } from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import { IoBedOutline, IoHomeOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import { IoCalendarClearOutline } from 'react-icons/io5';

const PropertiesDetails = () => {
  const cardDetails = useLoaderData();

  const details = cardDetails?.data?.property || {};
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  console.log(details);
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-1/3 my-3">
        <h3 className="font-semibold text-xl">{details.propertyTitle}</h3>
        <h3>
          {details.location.city},{details.location.state}
        </h3>
        <div className=" flex gap-5 ">
          <h3 className="flex items-center">
            <IoBedOutline />
            {details.bedroom} Bed
          </h3>
          <h3 className="flex items-center">
            <PiBathtub />
            {details.bathroom} Bath
          </h3>
          <h3 className="flex items-center">
            <BiShapeSquare />
            {details.squareFootage} sq Ft
          </h3>
        </div>
      </div>
      <div>
        {/* image */}
        {details.propertyImages && details.propertyImages.length > 0 && (
          <div className="grid grid-cols-2">
            <div>
              <img
                src={details.propertyImages[0]}
                alt={details.propertyTitle}
                className="w-11/12 mx-auto h-full rounded-lg "
              ></img>
            </div>
            <div className="grid grid-cols-1 space-y-4">
              <img
                src={details.propertyImages[1]}
                alt={details.propertyTitle}
                className="w-11/12 mx-auto h-56  rounded-lg "
              />
              <img
                src={details.propertyImages[2]}
                alt={details.propertyTitle}
                className="w-11/12 mx-auto h-56 rounded-lg "
              />
            </div>
          </div>
        )}
      </div>
      {/* overview */}
      <div className="w-2/3 my-6 rounded-lg shadow-lg px-7 py-6 ">
        <h3 className="text-xl font-semibold py-5">Overview</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <IoBedOutline />
            </h3>
            <div>
              <h3 className="font-semibold">Bedroom</h3>
              <h3>{details.bedroom}</h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <PiBathtub />
            </h3>
            <div>
              <h3 className="font-semibold">Bathroom</h3>
              <h3>{details.bathroom}</h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <IoCalendarClearOutline />
            </h3>
            <div>
              <h3 className="font-semibold">Year of Build</h3>
              <h3>{details.yearBuilt}</h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <BiSolidCarGarage />
            </h3>
            <div>
              <h3 className="font-semibold">Garage</h3>
              <h3>{details.parking.spaces} sq Ft</h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <BiShapeSquare />
            </h3>
            <div>
              <h3 className="font-semibold">Square Ft</h3>
              <h3>{details.squareFootage}</h3>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
              <IoHomeOutline />
            </h3>
            <div>
              <h3 className="font-semibold">Property Type</h3>
              <h3>{details.propertyType}</h3>
            </div>
          </div>
        </div>
      </div>
      {/* properties Description */}
      <div className="w-2/3 my-6 rounded-lg shadow-lg px-7 py-6 ">
        <h3 className="text-xl font-semibold py-5">Properties Description</h3>
        {/* see more implementation */}
        <p>
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
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3>
                <span className="font-semibold">Price:</span> $ {details.price}
              </h3>
              {/* parking need to be conditional */}
              <h3>
                <span className="font-semibold">Garage Size:</span>
                {details.parking.spaces}
              </h3>
              <h3>
                <span className="font-semibold">Bedroom:</span>
                {details.bedroom}
              </h3>
              <h3>
                <span className="font-semibold">Bathroom:</span>
                {details.bathroom}
              </h3>
            </div>
            <div>
              <h3>
                <span className="font-semibold">property Size:</span>
                {details.squareFootage} sq Ft
              </h3>
              <h3>
                <span className="font-semibold">Year of Build: </span>
                {details.yearBuilt} sq Ft
              </h3>
              <h3>
                <span className="font-semibold">property Type: </span>
                {details.propertyType}
              </h3>
              <h3>
                <span className="font-semibold">property Status: </span>
                {details.propertyStatus}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-2/3  rounded-lg shadow-lg px-5 py-6 my-5">
        <h3 className="text-xl font-semibold">Properties Features</h3>
        <li>{details.easement[0]}</li>
        <li>{details.easement[1]}</li>
        <li>{details.easement[2]}</li>
      </div>
      <div className=" w-2/3  rounded-lg shadow-lg px-5 py-6 my-5">
        <h3 className="text-xl font-semibold">Utilities</h3>
        <li>{details.utilities[0]}</li>
        <li>{details.utilities[1]}</li>
        <li>{details.utilities[2]}</li>
      </div>
    </div>
  );
};

export default PropertiesDetails;
