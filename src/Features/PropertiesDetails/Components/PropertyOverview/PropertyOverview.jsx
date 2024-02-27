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
    <div className="rounded-xl text-gray-700 ">
    
      <div className="grid text-sm md:text-[16px] py-4 lg:grid-cols-3 md:grid-cols-2 dark:text-in-dark grid-cols-2 gap-6 text-gray-700">

        {details.rooms?.officeRooms ? (
          <div className="flex  items-center gap-5">
            <div>
              <h3 className="bg-gray-100 dark:bg-gray-500  rounded-xl px-3 py-3">
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
              <h3 className="bg-gray-100 dark:bg-gray-500 rounded-lg px-3 py-3">
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

        <div className="flex  items-center gap-5">
          <div>
            <h3 className=" bg-gray-100 dark:bg-gray-500 rounded-lg px-3 py-3">
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
              <h3 className="bg-gray-100 dark:bg-gray-500 rounded-lg px-3 py-3">
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
            <h3 className="bg-gray-100 dark:bg-gray-500 rounded-lg px-3 py-3">
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
