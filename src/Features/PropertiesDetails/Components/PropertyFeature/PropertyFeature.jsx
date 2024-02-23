import React from 'react';
import { BiShapeSquare, BiSolidCarGarage } from 'react-icons/bi';
import {
  IoArrowUpOutline,
  IoBedOutline,
  IoBusinessSharp,
  IoFlowerOutline,
  IoHome,
  IoHomeOutline,
  IoWifi,
} from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';

import { IoCalendarClearOutline } from 'react-icons/io5';

import { FcConferenceCall } from 'react-icons/fc';
import { SiPicnic } from 'react-icons/si';
import {
  FaHouseFloodWater,
  FaMountain,
  FaSkyatlas,
  FaUsersViewfinder,
} from 'react-icons/fa6';
import { RiHomeOfficeFill } from 'react-icons/ri';

import { TbSunElectricity, TbSwimming } from 'react-icons/tb';
import { GrCafeteria, GrLounge } from 'react-icons/gr';
import {
  MdFace3,
  MdFlipToFront,
  MdOutlineBalcony,
  MdOutlineFireplace,
  MdOutlineRoofing,
  MdOutlineSecurity,
  MdSportsGymnastics,
  MdTheaters,
} from 'react-icons/md';

import { HiMiniBuildingOffice2, HiOutlineHomeModern } from 'react-icons/hi2';
import { GiOfficeChair, GiWoodenCrate } from 'react-icons/gi';
import { CiTempHigh } from 'react-icons/ci';

const PropertyFeature = ({ details }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold py-5">Properties Features</h3>
      {details.easement.map((easement, index) => (
        <div key={index} className="py-2 flex items-center gap-4">
          {easement === 'Swimming Pool' && <TbSwimming className="mr-2" />}
          {easement === 'Private Marina Access' && (
            <TbSwimming className="mr-2" />
          )}
          {easement === 'Garden' && <IoFlowerOutline className="mr-2" />}
          {easement === 'Community Gardens' && (
            <IoFlowerOutline className="mr-2" />
          )}
          {easement === 'Spa' && <MdFace3 className="mr-2" />}
          {easement === 'Mountain View' && <FaMountain className="mr-2" />}
          {easement === 'Sky Deck' && <FaSkyatlas className="mr-2" />}
          {easement === 'Theater Room' && <MdTheaters className="mr-2" />}
          {easement === 'Business Center' && (
            <IoBusinessSharp className="mr-2" />
          )}
          {easement === 'Rooftop Lounge' && <GrLounge className="mr-2" />}
          {easement === 'Gymnasium' && <MdSportsGymnastics className="mr-2" />}
          {easement === 'Fitness Trail' && (
            <MdSportsGymnastics className="mr-2" />
          )}
          {easement === 'City View Balcony' && (
            <MdOutlineBalcony className="mr-2" />
          )}
          {easement === 'Oceanfront Balcony' && (
            <MdOutlineBalcony className="mr-2" />
          )}
          {easement === 'Nature Trail Access' && (
            <MdOutlineBalcony className="mr-2" />
          )}
          {easement === 'Yoga Studio' && (
            <MdSportsGymnastics className="mr-2" />
          )}
          {easement === 'Garden Terrace' && (
            <IoFlowerOutline className="mr-2" />
          )}
          {easement === 'City View' && <MdOutlineBalcony className="mr-2" />}
          {easement === 'Rooftop Terrace' && (
            <HiOutlineHomeModern className="mr-2" />
          )}
          {easement === 'Smart Home System' && <IoHome className="mr-2" />}
          {easement === 'Secluded Location' && (
            <MdOutlineBalcony className="mr-2" />
          )}
          {easement === 'Fireplace' && <MdOutlineFireplace className="mr-2" />}
          {easement === 'Wooden Floors' && <GiWoodenCrate className="mr-2" />}
          {easement === 'Picnic Areas' && <SiPicnic className="mr-2" />}
          {easement === 'Modern Lobby' && <MdOutlineBalcony className="mr-2" />}
          {easement === 'Executive Offices' && (
            <HiMiniBuildingOffice2 className="mr-2" />
          )}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          {/*  */}
          {easement === 'Fitness Center' && (
            <MdSportsGymnastics className="mr-2" />
          )}
          {easement === 'Roof Garden' && <IoFlowerOutline className="mr-2" />}
          {easement === 'Front Porch' && <MdFlipToFront className="mr-2" />}
          {easement === 'Country Atmosphere' && <CiTempHigh className="mr-2" />}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          {easement === 'Conference Rooms' && (
            <GiOfficeChair className="mr-2" />
          )}
          <span>{easement.charAt(0).toUpperCase() + easement.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default PropertyFeature;
