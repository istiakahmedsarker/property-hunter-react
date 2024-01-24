import React from 'react';
import { BiShapeSquare } from 'react-icons/bi';
import { GiSelfLove } from 'react-icons/gi';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const PropertiesCardList = ({ card }) => {
  const {
    _id,
    propertyTitle,
    propertyImages,
    location,
    squareFootage,
    bedroom,
    bathroom,
    propertyStatus,
  } = card;
  return (
    <div className="px-4 py-5 rounded-lg shadow-lg grid lg:grid-cols-2 grid-cols-1">
      <div className=" w-full">
        {propertyImages && propertyImages.length > 0 && (
          <img
            src={propertyImages[0]}
            alt={propertyTitle}
            className="w-11/12 mx-auto h-56  rounded-lg "
          ></img>
        )}
      </div>
      <div>
        <Link to={`/propertiesDetails/${card._id}`}>
          <h3 className="font-bold my-2 underline ">{card.propertyTitle}</h3>
        </Link>
        <div>
          <h3>
            {card.location.city},{card.location.state}
          </h3>
          <div className="grid grid-cols-3 gap-5">
            <h3 className="flex items-center gap-3">
              <span>
                <IoBedOutline />
              </span>
              <span> {card.bedroom} Bed</span>
            </h3>
            <h3 className="flex items-center gap-3">
              <span>
                <PiBathtub />
              </span>
              <span>{card.bathroom} Bath</span>
            </h3>
            <h3 className="flex items-center gap-3">
              <span>
                <BiShapeSquare />
              </span>
              <span>{card.squareFootage} sq Ft</span>
            </h3>
          </div>
          <hr className="mt-7 mb-3" />
          <div className="flex items-center justify-between">
            <h3>For {card.propertyStatus}</h3>
            <h3 className="flex justify-center items-center gap-4">
              <HiArrowTopRightOnSquare />
              <GiSelfLove />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCardList;
