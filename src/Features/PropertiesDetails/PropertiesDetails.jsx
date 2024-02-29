import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyerInquiryForm from './Components/Buyer Inquiry Form/BuyerInquiryForm';
import TopButton from '../Properties/Components/TopButton/TopButton';
import RecommendedProperty from './Components/RecommendedProperty/RecommendedProperty';
import QRcode from './Components/QRCode/QRcode';
import ContactWithOwner from './Components/ContactWithOwner/ContactWithOwner';
import PaymentCalculation from './Components/PaymentCalculation/PaymentCalculation';
import GoogleMap from './Components/GoogleMap/GoogleMap';
import PropertyFeature from './Components/PropertyFeature/PropertyFeature';
import PropertyUtilities from './Components/PropertyUtilities/PropertyUtilities';
import PropertyOverview from './Components/PropertyOverview/PropertyOverview';
import { IoLocationOutline } from 'react-icons/io5';

const PropertiesDetails = () => {
  const cardDetails = useLoaderData();
  const details = cardDetails?.data?.property || {};
  console.log(details);
  //state for show full description
  const [isShowFullDescription, setIsShowFullDescription] = useState(false);
  // state for open the form
  const [isFormOpen, setIsFormOpen] = useState(false);
  // for contact with owner
  const [showForm, setShowForm] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const handleFormToggle = () => {
    setShowForm(!showForm);
    setShowSchedule(false); // Hide schedule when showing form
    setActiveButton('form');
  };

  const handleScheduleToggle = () => {
    setShowSchedule(!showSchedule);
    setShowForm(false); // Hide form when showing schedule
    setActiveButton('schedule');
  };

  const toggleDescription = () => {
    setIsShowFullDescription(!isShowFullDescription);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className=" w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto py-0 md:py-4 lg:py-8 px-4 md:px-0 lg:px-4 xl:px-0 space-y-6 md:space-y-12 ">
      {/* Title and necessary information */}
      <div className="flex items-start justify-between w-full my-3 ">
        {/* //? Title and Location */}
        <div className="space-y-3 flex-1">
          <h3 className="font-semibold dark:text-in-dark text-gray-950 text-2xl md:text-4xl ">
            {details.propertyTitle}
          </h3>
          <p className="flex text-gray-500 underline items-center text-[14px] md:text-xl font-medium gap-2">
            <IoLocationOutline />
            <span>{details.location.address},</span>
            <span>{details.location.city},</span>
            <span>{details.location.state}</span>
          </p>
        </div>
      </div>

      {/* image */}
      {details.propertyImages && details.propertyImages.length > 0 && (
        <div className="lg:relative max-w-7xl w-full mr-auto">
          <div className="grid  mx-auto  lg:grid-cols-6 md:grid-rows-4 gap-4 md:grid-cols-1 grid-cols-1">
            <div className="relative h-full col-span-1 lg:col-span-4 row-span-4">
              <img
                src={details.propertyImages[0]}
                alt={details.propertyTitle}
                className=" mx-auto w-full h-full object-cover rounded-xl"
              ></img>
              <div className="bg-[#0b190631] opacity-10 h-full w-full absolute top-0 left-0"></div>
              <div className="bg-[#2e8fff3d] opacity-10 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="relative h-full col-span-1 lg:col-span-2 row-span-2">
              <img
                src={details.propertyImages[1]}
                alt={details.propertyTitle}
                className="w-full mx-auto h-full object-cover rounded-xl "
              />
              <div className="bg-[#0b190631] opacity-10 h-full w-full absolute top-0 left-0"></div>
              <div className="bg-[#2e90ff7e] opacity-10 h-full w-full absolute top-0 left-0"></div>
            </div>

            <div className="relative h-full col-span-1 lg:col-span-2 row-span-2">
              <img
                src={details.propertyImages[2]}
                alt={details.propertyTitle}
                className="w-full mx-auto h-full object-cover rounded-xl"
              />
              <div className="bg-[#0b190631] opacity-10 h-full w-full absolute top-0 left-0"></div>
              <div className="bg-[#2e90ff7e] opacity-10 h-full w-full absolute top-0 left-0"></div>
            </div>
          </div>
          {/* overview section */}
        </div>
      )}

      <div className="flex lg:flex-row flex-col gap-8 lg:gap-6 xl:gap-12 mt-10 dark:text-in-dark">
        <div className="lg:w-2/3 w-full">
          <div className="w-full my-0 py-0  space-y-12">
            {/* properties Description section */}
            <div className="w-full  space-y-8">
              {/* Property details */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl dark:text-in-dark text-gray-900 font-semibold">
                  Properties Description
                </h3>
                {/* see more description implementation */}
                <p className="text-sm md:text-[16px] text-gray-500">
                  {isShowFullDescription
                    ? details.description
                    : `${details.description.slice(0, 210)}${
                        details.description.length > 210 ? '...' : ''
                      }`}
                </p>
                {details.description.length > 200 && (
                  <button
                    className="text-blue-800 px-5 py-3 dark:bg-gray-300 dark:text-black bg-gray-100 rounded-lg"
                    onClick={toggleDescription}
                  >
                    {isShowFullDescription ? 'See less' : 'See more'}
                  </button>
                )}
              </div>

              {/* Properties Overview */}

              <div className="space-y-4">
                <h1 className="text-xl md:text-2xl dark:text-in-dark text-gray-900 font-semibold ">
                  Property Overview
                </h1>
                <PropertyOverview details={details} />
              </div>

              <div className="">
                {/* properties details section */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-in-dark py-5">
                  Properties Details
                </h3>
                <div className="grid grid-cols-2  py-5 text-sm md:text-[16px]  lg:gap-5 gap-2">
                  <h3 className="grid grid-cols-2 ">
                    <span className="font-semibold">Price</span>
                    <span>: $ {details.price}</span>
                  </h3>
                  {/* parking need to be conditional */}
                  {details.parking.included ? (
                    <h3 className="grid grid-cols-2 ">
                      <span className="font-semibold">Garage size</span>
                      <span>: {details.parking.spaces}</span>
                    </h3>
                  ) : (
                    ''
                  )}

                  {details.rooms?.bedRooms ? (
                    <h3 className="grid grid-cols-2 ">
                      <span className="font-semibold">Bedroom</span>
                      <span>: {details.rooms.bedRooms}</span>
                    </h3>
                  ) : (
                    ''
                  )}

                  {details.rooms?.bathRooms ? (
                    <h3 className="grid grid-cols-2 ">
                      <span className="font-semibold">Bathroom</span>
                      <span>: {details.rooms.bathRooms}</span>
                    </h3>
                  ) : (
                    ''
                  )}
                  {details.rooms?.conferenceRooms ? (
                    <h3 className="grid grid-cols-2">
                      <span className="font-semibold">Conference room</span>
                      <span>: {details.rooms.conferenceRooms}</span>
                    </h3>
                  ) : (
                    ''
                  )}
                  {details.rooms?.officeRooms ? (
                    <h3 className="grid grid-cols-2">
                      <span className="font-semibold">Office room</span>
                      <span>: {details.rooms.officeRooms}</span>
                    </h3>
                  ) : (
                    ''
                  )}

                  {/* property size */}
                  <h3 className="grid grid-cols-2 ">
                    <span className="font-semibold">Property size</span>
                    <span>: {details.squareFootage} sq Ft</span>
                  </h3>
                  <h3 className="grid grid-cols-2 ">
                    <span className="font-semibold">Year of build </span>
                    <span>: {details.yearBuilt} </span>
                  </h3>
                  <h3 className="grid grid-cols-2">
                    <span className="font-semibold">Property type </span>
                    <span>: {details.propertyType}</span>
                  </h3>
                  <h3 className="grid grid-cols-2 ">
                    <span className="font-semibold">Property status </span>
                    <span>: {details.propertyStatus}</span>
                  </h3>
                </div>
              </div>
            </div>
            {/* property feature section */}
            <div className=" w-full  grid grid-cols-1">
              <PropertyFeature details={details}></PropertyFeature>

              {/* properties utilities section */}
              <PropertyUtilities details={details}></PropertyUtilities>
            </div>
            {/* payment calculation */}
            <PaymentCalculation details={details}></PaymentCalculation>
          </div>
        </div>

        <div className="lg:w-1/3 w-full">
          <div className="w-full space-y-8 ">
            {/*//? Price */}
            <div className="w-full flex-1 flex items-start justify-center lg:justify-start ">
              <div className="space-y-3 ">
                <h3 className="text-2xl md:text-4xl text-center lg:text-left text-gray-950 font-bold dark:text-in-dark">
                  $ {details.price}
                </h3>
                <div className="grid grid-cols-3 lg:grid-cols-3 text-sm md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300">
                  {details?.rooms?.bedRooms ? (
                    <div className="flex items-center gap-2 ">
                      <h3 className="font-medium">Bed</h3>
                      <h3>{details?.rooms?.bedRooms}</h3>
                    </div>
                  ) : (
                    ''
                  )}

                  {details.rooms?.bathRooms ? (
                    <div className="flex  items-center gap-2">
                      <h3 className="font-medium">Bath</h3>
                      <h3>{details.rooms.bathRooms}</h3>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="flex  items-center gap-2">
                    <h3 className="font-medium">Sqft</h3>
                    <h3>{details.squareFootage}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-5">
              <div className="flex justify-start">
                <button
                  className="bg-[#076aa5] focus:border-blue-500 border-2 text-black flex-1 px-4 py-3 rounded-xl rounded-r-none "
                  onClick={handleFormToggle}
                  style={{
                    backgroundColor:
                      activeButton === 'form' ? 'white' : '#076aa5',
                    color: activeButton === 'form' ? 'black ' : 'white ',
                    border:
                      activeButton === 'form' ? '2px solid #076aa5' : 'none',
                  }}
                >
                  {showForm ? 'Request Form' : 'Request Form'}
                </button>
                <button
                  className="bg-[#076aa5] flex-1   focus:border-blue-500 border-2 text-black px-4 py-3 rounded-xl rounded-l-none"
                  onClick={handleScheduleToggle}
                  style={{
                    backgroundColor:
                      activeButton === 'schedule' ? 'white ' : '#076aa5',
                    color: activeButton === 'schedule' ? 'black ' : 'white ',
                    border:
                      activeButton === 'schedule'
                        ? '2px solid #076aa5'
                        : 'none',
                  }}
                >
                  {showSchedule ? 'Schedule a Tour' : 'Schedule a Tour'}
                </button>
              </div>

              {showForm && (
                <ContactWithOwner details={details}></ContactWithOwner>
              )}
              {showSchedule && <div className="py-5">Select Your Schedule</div>}
            </div>
          </div>

          {/*from open  */}
          <div>
            <div className=" w-full my-6 rounded-sm py-6">
              <h3 className="text-xl font-semibold py-5">
                Essential information Submit
              </h3>
              <button
                className="w-full px-4 py-3 text-white bg-[#076aa5] my-4 rounded-lg"
                onClick={toggleForm}
                disabled={details.propertyStatus === 'sold' ? true : false}
              >
                {isFormOpen ? 'Close Form' : 'Open Form'}
              </button>
              {isFormOpen && <BuyerInquiryForm details={details} />}
            </div>
          </div>
        </div>
      </div>
      {/* properties Address section */}
      <div className="dark:text-in-dark w-full pb-5">
        <h3 className="text-xl md:text-2xl font-semibold py-5">Location</h3>
        <div className="grid lg:grid-cols-2 grid-cols-2 lg:gap-5 gap-3">
          <div>
            <h3 className=" lg:text-lg text-sm flex gap-3 lg:grid lg:grid-cols-2 py-2">
              <span className="font-semibold"> Address</span>
              <span>: {details.location.address}</span>
            </h3>
            <h3 className=" lg:text-lg text-sm flex gap-3 lg:grid lg:grid-cols-2 py-2">
              <span className="font-semibold"> City</span>{' '}
              <span>: {details.location.city}</span>
            </h3>
            <h3 className=" lg:text-lg text-sm flex gap-3 lg:grid lg:grid-cols-2 py-2">
              <span className="font-semibold"> State</span>{' '}
              <span>: {details.location.state}</span>
            </h3>
          </div>
          {/* QR code implementation */}
          <div className=" flex lg:justify-end md:flex-end flex-col">
            <QRcode></QRcode>
          </div>
        </div>
        {/* map section */}
        <GoogleMap details={details}></GoogleMap>
      </div>
      {/* recommended property section */}
      <RecommendedProperty
        cardDetails={cardDetails}
        type={details?.propertyType}
        id={details?._id}
      ></RecommendedProperty>
      {/* for scroll to top button */}
      <TopButton></TopButton>
    </div>
  );
};

export default PropertiesDetails;
