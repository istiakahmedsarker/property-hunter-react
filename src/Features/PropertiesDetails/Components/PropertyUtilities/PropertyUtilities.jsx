import React from 'react';

import { IoWifi } from 'react-icons/io5';

import { FaHouseFloodWater } from 'react-icons/fa6';

import { TbSunElectricity } from 'react-icons/tb';
import { GrCafeteria } from 'react-icons/gr';
import { MdOutlineFireplace, MdOutlineSecurity } from 'react-icons/md';

const PropertyUtilities = ({ details }) => {
  return (
    <div>
      <h3 className=" text-xl md:text-2xl font-semibold py-5">Utilities</h3>
      <div className="flex dark:text-in-dark items-center gap-2 flex-wrap">
      {details.utilities.map((utility, index) => (
        <div key={index} className="py-2 dark:text-in-dark flex items-center gap-4 ">
           <p className='bg-gray-100 text-sm flex items-center px-3 py-1 flex-wrap rounded-xl text-gray-800 font-medium'>
          {utility === 'Water' && <FaHouseFloodWater className="mr-2" />}
          {utility === 'Electricity' && <TbSunElectricity className="mr-2" />}
          {utility === 'Wifi' && <IoWifi className="mr-2" />}
          {utility === 'High-speed Internet' && <IoWifi className="mr-2" />}
          {utility === 'High-Speed Internet' && <IoWifi className="mr-2" />}
          {utility === 'High-speed Fiber Internet' && (
            <IoWifi className="mr-2" />
          )}
          {utility === 'cafeteria' && <GrCafeteria className="mr-2" />}
          {utility === 'Central Heating' && (
            <MdOutlineFireplace className="mr-2" />
          )}
          {utility === '24/7 Security' && (
            <MdOutlineSecurity className="mr-2" />
          )}
          {/*  */}
          <span>{utility.charAt(0).toUpperCase() + utility.slice(1)}</span>
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PropertyUtilities;
