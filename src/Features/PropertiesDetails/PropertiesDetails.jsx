import React, { useEffect, useState } from 'react';
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
import PageTitle from '../PageTitle/PageTitle';

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
    // setActiveButton('Close Form');
  };
  //  show google map
  // const handleVideoCall = () => {
  //   // Open the video call component in a new tab
  //   window.open('/audioVideoCall', '_blank');
  // };
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Property Hunter || Details"></PageTitle>
      <div className="lg:w-1/3 w-full my-3">
        <h3 className="font-semibold text-2xl py-5 px-4">
          {details.propertyTitle}
        </h3>
      </div>

      {/* image */}
      {details.propertyImages && details.propertyImages.length > 0 && (
        <div className="lg:relative w-11/12 mx-auto">
          <div className="grid  mx-auto lg:grid-cols-3 gap-1 md:grid-cols-1 grid-cols-1">
            <div className="h-full">
              <img
                src={details.propertyImages[0]}
                alt={details.propertyTitle}
                className=" mx-auto w-full  h-96 rounded-sm "
              ></img>
            </div>
            <div className="h-full">
              <img
                src={details.propertyImages[1]}
                alt={details.propertyTitle}
                className="w-full mx-auto h-96  rounded-sm "
              />
            </div>

            <div className="h-full">
              <img
                src={details.propertyImages[2]}
                alt={details.propertyTitle}
                className="w-full mx-auto h-96 rounded-sm "
              />
            </div>
          </div>
          {/* overview section */}
          <PropertyOverview details={details}></PropertyOverview>
        </div>
      )}

      <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
        <div className="lg:w-2/3 w-full">
          <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            {/* properties Description section */}
            <div className="w-full px-5 ">
              <h3 className="text-xl  font-semibold py-5">
                Properties Description
              </h3>
              {/* see more description implementation */}
              <p className="">
                {isShowFullDescription
                  ? details.description
                  : `${details.description.slice(0, 210)}${
                      details.description.length > 210 ? '...' : ''
                    }`}
              </p>
              {details.description.length > 200 && (
                <button className="text-blue-800" onClick={toggleDescription}>
                  {isShowFullDescription ? 'See less' : 'See more'}
                </button>
              )}

              <div className="">
                {/* properties details section */}
                <h3 className="text-xl font-semibold py-5">
                  Properties Details
                </h3>
                <div className="grid grid-cols-2  lg:gap-5 gap-2">
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
            <div className=" w-full  px-5 py-5  grid grid-cols-1">
              <PropertyFeature details={details}></PropertyFeature>

              {/* properties utilities section */}
              <PropertyUtilities details={details}></PropertyUtilities>
            </div>
            {/* payment calculation */}
            <PaymentCalculation details={details}></PaymentCalculation>
            {/* properties Address section */}
            <div className=" w-full px-5 pb-5">
              <h3 className="text-xl font-semibold py-5">Address</h3>
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
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
            {/* owner information */}
            <div className="w-full  px-5">
              <h3 className="text-xl font-semibold py-5">Owner address</h3>
              <div>
                <h3 className="flex gap-5 py-2">
                  <span className="font-semibold"> Name</span>
                  <span>: {details.ownerInformation.name}</span>
                </h3>
                <h3 className="flex gap-5 py-2">
                  <span className="font-semibold"> Email</span>
                  <span>: {details.ownerInformation.email}</span>
                </h3>
                {details.ownerInformation.phone ? (
                  <h3 className="flex gap-5 py-2">
                    <span className="font-semibold"> Phone</span>
                    <span>: {details.ownerInformation.phone}</span>
                  </h3>
                ) : (
                  ''
                )}
              </div>
            </div>
            {/* contact and schedule button */}
            <div className="w-full px-5 py-5 ">
              <div className="flex justify-center">
                <button
                  className="bg-[#076aa5] focus:border-blue-500 border-2 text-black px-4 py-3 rounded-sm rounded-r-none "
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
                  className="bg-[#076aa5] rounded-l-none   focus:border-blue-500 border-2 text-black px-4 py-3 rounded-sm"
                  onClick={handleScheduleToggle}
                  // onClick={handleVideoCall}
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
            <div className=" w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6">
              <h3 className="text-xl font-semibold py-5">
                Essential information Submit
              </h3>
              <button
                className="w-full px-4 py-3 text-white bg-[#076aa5] my-4 rounded-sm"
                onClick={toggleForm}
                disabled={details.propertyStatus === 'sold' ? true : false}
                // className={`${
                //   activeButton === 'Close Form'
                //     ? 'bg-white text-black border-blue-500 border-2'
                //     : 'bg-blue-500 text-white'
                // } rounded-r-none focus:border-blue-500 px-4 py-3 rounded-sm`}
              >
                {isFormOpen ? 'Close Form' : 'Open Form'}
              </button>
              {isFormOpen && <BuyerInquiryForm details={details} />}
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
