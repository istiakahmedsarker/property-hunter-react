import React, { useEffect, useState } from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import { IoArrowUpOutline, IoBedOutline, IoHomeOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import { IoCalendarClearOutline } from 'react-icons/io5';
import AddProperties from '../../Pages/AddProperties/AddProperties';
import BuyerInquiryForm from './Buyer Inquiry Form/BuyerInquiryForm';
import TopButton from '../Shared/TopButton/TopButton';
import { FcConferenceCall } from 'react-icons/fc';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { RiHomeOfficeFill } from 'react-icons/ri';
import RecommendedProperty from './RecommendedProperty/RecommendedProperty';
import QRcode from '../Shared/QRCode/QRCode';

const PropertiesDetails = () => {
  const cardDetails = useLoaderData();
  const details = cardDetails?.data?.property || {};
  //state for show full description
  const [isShowFullDescription, setIsShowFullDescription] = useState(false);
  // state for open the form
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleDescription = () => {
    setIsShowFullDescription(!isShowFullDescription);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  //  show google map
  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = details.location.latitude;
    const lon = details.location.longitude;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:w-1/3 w-full my-3">
        <h3 className="font-semibold text-2xl">{details.propertyTitle}</h3>
        {/* <h3 className="flex gap-3">
          <span> {details.location.city},</span>
          <span>{details.location.state}</span>
        </h3> */}
        {/* <div className=" flex gap-5 ">
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
        </div> */}
      </div>
      <div>
        {/* image */}
        {details.propertyImages && details.propertyImages.length > 0 && (
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
            <div className="h-full">
              <img
                src={details.propertyImages[0]}
                alt={details.propertyTitle}
                className="w-11/12 mx-auto h-full rounded-lg "
              ></img>
            </div>
            <div className="grid grid-cols-1 ">
              <div className="">
                <img
                  src={details.propertyImages[1]}
                  alt={details.propertyTitle}
                  className="w-8/12 mx-auto h-56  rounded-lg "
                />
              </div>

              <div>
                <img
                  src={details.propertyImages[2]}
                  alt={details.propertyTitle}
                  className="w-8/12 mx-auto h-56 rounded-lg "
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex lg:flex-row flex-col gap-5 ">
        <div className="lg:w-2/3 w-full">
          {/* overview section */}
          <div className="w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            <h3 className="text-xl font-semibold py-5">Overview</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6">
              {details?.rooms?.bedRooms ? (
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
              ) : (
                ''
              )}

              {details.rooms?.officeRooms ? (
                <div className="flex  items-center gap-5">
                  <div>
                    <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                      <RiHomeOfficeFill />
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Office room</h3>
                    <h3></h3>
                  </div>
                </div>
              ) : (
                ''
              )}

              {details.rooms?.conferenceRooms ? (
                <div className="flex  items-center gap-5">
                  <div>
                    <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                      <FaUsersViewfinder />
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Conference room</h3>
                    <h3>{details.bathroom}</h3>
                  </div>
                </div>
              ) : (
                ''
              )}

              {details.rooms?.bathRooms ? (
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
              ) : (
                ''
              )}

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
              {details.parking.included ? (
                <div className="flex  items-center gap-5">
                  <div>
                    <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                      <BiSolidCarGarage />
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Garage</h3>
                  </div>
                </div>
              ) : (
                ''
              )}

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
          {/* properties Description section */}
          <div className="w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            <h3 className="text-xl  font-semibold py-5">
              Properties Description
            </h3>
            {/* see more description implementation */}
            <p className="">
              {isShowFullDescription
                ? details.description
                : `${details.description.slice(0, 200)}${
                    details.description.length > 200 ? '...' : ''
                  }`}
            </p>
            {details.description.length > 200 && (
              <button className="text-blue-800" onClick={toggleDescription}>
                {isShowFullDescription ? 'See less' : 'See more'}
              </button>
            )}

            <div className="">
              {/* properties details section */}
              <h3 className="text-xl font-semibold py-5">Properties Details</h3>
              <div className="grid grid-cols-2  lg:gap-5 gap-2">
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Price</span>
                  <span>: $ {details.price}</span>
                </h3>
                {/* parking need to be conditional */}
                {details.parking.included ? (
                  <h3 className="grid grid-cols-2 py-1">
                    <span className="font-semibold">Garage size</span>
                    <span>: {details.parking.spaces}</span>
                  </h3>
                ) : (
                  ''
                )}

                {details.rooms?.bedRooms ? (
                  <h3 className="grid grid-cols-2 py-1">
                    <span className="font-semibold">Bedroom</span>
                    <span>: {details.rooms.bedRooms}</span>
                  </h3>
                ) : (
                  ''
                )}

                {details.rooms?.bathRooms ? (
                  <h3 className="grid grid-cols-2 py-1">
                    <span className="font-semibold">Bathroom</span>
                    <span>: {details.rooms.bathRooms}</span>
                  </h3>
                ) : (
                  ''
                )}
                {details.rooms?.conferenceRooms ? (
                  <h3 className="grid grid-cols-2 py-1">
                    <span className="font-semibold">Conference room</span>
                    <span>: {details.rooms.conferenceRooms}</span>
                  </h3>
                ) : (
                  ''
                )}
                {details.rooms?.officeRooms ? (
                  <h3 className="grid grid-cols-2 py-1">
                    <span className="font-semibold">Office room</span>
                    <span>: {details.rooms.officeRooms}</span>
                  </h3>
                ) : (
                  ''
                )}

                {/* property size */}
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Property size</span>
                  <span>: {details.squareFootage} sq Ft</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Year of build </span>
                  <span>: {details.yearBuilt} </span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Property type </span>
                  <span>: {details.propertyType}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-1">
                  <span className="font-semibold">Property status </span>
                  <span>: {details.propertyStatus}</span>
                </h3>
              </div>
            </div>
          </div>
          {/* property feature section */}
          <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Properties Features</h3>
            <li className="py-2">{details.easement[0]}</li>
            <li className="py-2">{details.easement[1]}</li>
            <li className="py-2">{details.easement[2]}</li>
          </div>
          {/* properties utilities section */}
          <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Utilities</h3>
            <li className="py-2">{details.utilities[0]}</li>
            <li className="py-2">{details.utilities[1]}</li>
            <li className="py-2">{details.utilities[2]}</li>
          </div>
          {/* properties Address section */}
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
              {/* QR code implementation */}
              <div className=" flex " style={{ justifyContent: 'flex-end' }}>
                <QRcode></QRcode>
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
          {/* recommended property section */}
          <RecommendedProperty
            cardDetails={cardDetails}
            type={details?.propertyType}
            id={details?._id}
          ></RecommendedProperty>
          
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
              {details.ownerInformation.phone ? (
                <h3 className="flex gap-5 py-2">
                  <span> Phone</span>
                  <span>: {details.ownerInformation.phone}</span>
                </h3>
              ) : (
                ''
              )}
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
