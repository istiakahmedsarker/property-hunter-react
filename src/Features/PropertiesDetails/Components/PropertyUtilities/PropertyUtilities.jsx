import React from 'react';

import { IoWifi } from 'react-icons/io5';

import { FaHouseFloodWater } from 'react-icons/fa6';

import { TbSunElectricity } from 'react-icons/tb';
import { GrCafeteria } from 'react-icons/gr';
import { MdOutlineFireplace, MdOutlineSecurity } from 'react-icons/md';

const PropertyUtilities = ({ details }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold py-5">Utilities</h3>
      {details.utilities.map((utility, index) => (
        <div key={index} className="py-2 flex items-center gap-4 ">
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
        </div>
      ))}
    </div>
  );
};

export default PropertyUtilities;
