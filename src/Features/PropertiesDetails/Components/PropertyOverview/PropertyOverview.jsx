import React from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import { FaUsersViewfinder } from 'react-icons/fa6';
import {
  IoBedOutline,
  IoCalendarClearOutline,
  IoHomeOutline,
} from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { RiHomeOfficeFill } from 'react-icons/ri';

const PropertyOverview = ({ details }) => {
  return (
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
  );
};

export default PropertyOverview;
