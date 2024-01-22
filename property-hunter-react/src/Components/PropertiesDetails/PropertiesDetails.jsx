import React from 'react';
import { BiShapeSquare } from 'react-icons/bi';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';

const PropertiesDetails = () => {
  const cardDetails = useLoaderData();

  const details = cardDetails?.data?.property || {};
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
      <div>
        <h3></h3>
      </div>
      <div></div>
      <div className="my-4">
        {/* properties Description */}
        <h3 className="text-xl font-semibold ">Properties Description</h3>
        <h3>{details.description}</h3>
      </div>
      <div className="w-2/3 my-4">
        {/* properties details */}
        <h3 className="text-xl font-semibold">Properties Details</h3>
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
      <div className="my-4">
        <h3 className="text-xl font-semibold">Properties Features</h3>
        <li>{details.easement[0]}</li>
        <li>{details.easement[1]}</li>
        <li>{details.easement[2]}</li>
        <li>{details.easement[3]}</li>
      </div>
    </div>
  );
};

export default PropertiesDetails;
