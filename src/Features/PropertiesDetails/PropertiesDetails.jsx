import React, { useEffect, useState } from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import {
  IoArrowUpOutline,
  IoBedOutline,
  IoBusinessSharp,
  IoFlowerOutline,
  IoHomeOutline,
  IoWifi,
} from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import { IoCalendarClearOutline } from 'react-icons/io5';
import AddProperties from '../../Pages/AddProperties/AddProperties';
import BuyerInquiryForm from './Components/Buyer Inquiry Form/BuyerInquiryForm';
import TopButton from '../Properties/Components/TopButton/TopButton';
import { FcConferenceCall } from 'react-icons/fc';
import {
  FaHouseFloodWater,
  FaMountain,
  FaSkyatlas,
  FaUsersViewfinder,
} from 'react-icons/fa6';
import { RiHomeOfficeFill } from 'react-icons/ri';
import RecommendedProperty from './Components/RecommendedProperty/RecommendedProperty';
import QRcode from './Components/QRCode/QRcode';
import { TbSunElectricity, TbSwimming } from 'react-icons/tb';
import { GrCafeteria } from 'react-icons/gr';
import { MdFace3, MdTheaters } from 'react-icons/md';
import ContactWithOwner from './Components/ContactWithOwner/ContactWithOwner';
import PaymentCalculation from './Components/PaymentCalculation/PaymentCalculation';
import GoogleMap from './Components/GoogleMap/GoogleMap';

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
  //  show google map

  return (
    <div className="max-w-7xl mx-auto">
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
          <div className="rounded-sm shadow-lg drop-shadow-lg  lg:absolute bg-white -bottom-10  left-20 right-20 ">
            <div className="grid px-6 py-5 lg:grid-cols-6 md:grid-cols-2 grid-cols-2 gap-6">
              {details?.rooms?.bedRooms ? (
                <div className="flex items-center gap-5">
                  <div>
                    <h3 className="border-2 border-gray-300 rounded-lg px-3 py-3">
                      <IoBedOutline />
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bedroom</h3>
                    <h3>{details?.rooms?.bedRooms}</h3>
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
                    <h3>{details.rooms?.officeRooms}</h3>
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
                    <h3>{details.rooms?.conferenceRooms}</h3>
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
                    <h3>{details.rooms.bathRooms}</h3>
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
                    <h3>{details.parking.spaces}</h3>
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
                  <h3 className="font-semibold">Type</h3>
                  <h3>{details.propertyType}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
        <div className="lg:w-2/3 w-full">
          {/* properties Description section */}
          <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
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
          <div className=" w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 grid grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold py-5">
                Properties Features
              </h3>
              {details.easement.map((easement, index) => (
                <div key={index} className="py-2 flex items-center gap-4">
                  {easement === 'Swimming Pool' && (
                    <TbSwimming className="mr-2" />
                  )}
                  {easement === 'Garden' && (
                    <IoFlowerOutline className="mr-2" />
                  )}
                  {easement === 'Spa' && <MdFace3 className="mr-2" />}
                  {easement === 'Mountain View' && (
                    <FaMountain className="mr-2" />
                  )}
                  {easement === 'Sky Deck' && <FaSkyatlas className="mr-2" />}
                  {easement === 'Theater Room' && (
                    <MdTheaters className="mr-2" />
                  )}
                  {easement === 'Business Center' && (
                    <IoBusinessSharp className="mr-2" />
                  )}

                  <span>
                    {easement.charAt(0).toUpperCase() + easement.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            {/* properties utilities section */}
            <div>
              <h3 className="text-xl font-semibold py-5">Utilities</h3>
              {details.utilities.map((utility, index) => (
                <div key={index} className="py-2 flex items-center gap-4 ">
                  {utility === 'Water' && (
                    <FaHouseFloodWater className="mr-2" />
                  )}
                  {utility === 'Electricity' && (
                    <TbSunElectricity className="mr-2" />
                  )}
                  {utility === 'Wifi' && <IoWifi className="mr-2" />}
                  {utility === 'High-speed Fiber Internet' && (
                    <IoWifi className="mr-2" />
                  )}
                  {utility === 'cafeteria' && <GrCafeteria className="mr-2" />}
                  <span>
                    {utility.charAt(0).toUpperCase() + utility.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* payment calculation */}
          <PaymentCalculation details={details}></PaymentCalculation>

          {/* properties Address section */}
          <div className=" w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6">
            <h3 className="text-xl font-semibold py-5">Address</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3 className="grid grid-cols-2 py-2">
                  <span className="font-semibold"> Address</span>
                  <span>: {details.location.address}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-2">
                  <span className="font-semibold"> City</span>{' '}
                  <span>: {details.location.city}</span>
                </h3>
                <h3 className="grid grid-cols-2 py-2">
                  <span className="font-semibold"> State</span>{' '}
                  <span>: {details.location.state}</span>
                </h3>
              </div>
              {/* QR code implementation */}
              <div
                className=" flex lg:justify-end md:flex-end flex-col"
                // style={{ justifyContent: 'flex-end' }}
              >
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
        <div className="lg:w-1/3 w-full">
          {/* owner information */}
          <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
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
          <div className="w-full my-6 rounded-sm shadow-lg drop-shadow-lg bg-white px-7 py-6 ">
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
                style={{
                  backgroundColor:
                    activeButton === 'schedule' ? 'white ' : '#076aa5',
                  color: activeButton === 'schedule' ? 'black ' : 'white ',
                  border:
                    activeButton === 'schedule' ? '2px solid #076aa5' : 'none',
                }}
              >
                {showSchedule ? 'Schedule a Tour' : 'Schedule a Tour'}
              </button>
            </div>

            {showForm && (
              <ContactWithOwner details={details}></ContactWithOwner>
            )}
            {showSchedule && <div>schedule</div>}
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
                disabled={details.propertyStatus === "sold" ? true : false}
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
