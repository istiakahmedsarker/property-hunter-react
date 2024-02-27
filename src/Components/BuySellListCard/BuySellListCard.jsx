import React from 'react';
import { GiHutsVillage } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { MdOutlineApartment } from 'react-icons/md';
import SectionTitle from '../SectionTitle/SectionTitle';

const BuySellListCard = () => {
  return (
    <div className="lg:max-w-7xl md:w-11/12 w-11/12 mx-auto my-10">
      <div className="lg:mb-40">
        {/* <h3 className="text-gray-900 text-[28px] md:text-[30px] lg:text-4xl text-center dark:text-in-dark font-bold md:mb-3 lg:mb-4">
          Real Estate service
        </h3>
        <h3 className="text-sm font-semibold text-center dark:text-in-dark mb-10">
          Premium Real Estate service to help you buy your dream property
        </h3> */}
        <SectionTitle
          title="Services"
          subTitle="Premium Real Estate Service "
        />
      </div>
      <div className="lg:relative mt-10">
        <div className="bg-[#076aa5] lg:h-[40vh]   rounded-sm rounded-t-3xl "></div>
        {/* 3 card in this div */}
        <div className="   grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-5 w-11/12  mx-auto lg:absolute  lg:-top-20 right-10  left-10   ">
          <div className="bg-white dark:bg-card-dark px-7 py-8 rounded-sm flex justify-center items-center flex-col ">
            <h2>
              <GiHutsVillage className="text-5xl text-[#076aa5] " />
            </h2>
            <h3 className="text-center py-4 text-xl font-semibold dark:text-in-dark">
              Buy a Property
            </h3>
            <h3 className="text-sm  text-center dark:text-in-dark">
              Discover your perfect match in a home sweet home, where dreams
              become addresses.
            </h3>
          </div>
          <div className="bg-white dark:bg-card-dark px-7 py-8 rounded-sm flex justify-center items-center flex-col">
            <h2>
              <ImOffice className="text-5xl text-[#076aa5] " />
            </h2>
            <h3 className="text-center py-4 text-xl font-semibold dark:text-in-dark">
              Sell a Property
            </h3>
            <h3 className="text-sm  text-center dark:text-in-dark ">
              Turn your property into profit, with a seamless selling process
              that maximizes value and minimizes stress.
            </h3>
          </div>
          <div className="bg-white dark:bg-card-dark px-7 py-8 rounded-sm flex justify-center items-center flex-col">
            <h2>
              <MdOutlineApartment className="text-5xl text-[#076aa5] " />
            </h2>
            <h3 className="text-center py-4 text-xl font-semibold dark:text-in-dark">
              Rent a Property
            </h3>
            <h3 className="text-sm  text-center dark:text-in-dark ">
              Experience the freedom to live without boundaries, renting your
              ideal space today.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellListCard;
