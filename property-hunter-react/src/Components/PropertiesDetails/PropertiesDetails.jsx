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
    // <div>
    //   <h3>details</h3>
    // </div>
    <div>
      <h3>{details.propertyTitle}</h3>
      <div>
        <h3>
          {details.location.city},{details.location.state}
        </h3>
        <div className="grid grid-cols-3 gap-5">
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
      <div>{/* image */}</div>
      <div>
        {/* properties Description */}
        <h3>{details.description}</h3>
      </div>
      <div>
        {/* properties details */}
        <h3>Properties Details</h3>
      </div>
      <div>
        <h3>{details.easement}</h3>
      </div>
      <h3>details page</h3>
    </div>
  );
};

export default PropertiesDetails;
