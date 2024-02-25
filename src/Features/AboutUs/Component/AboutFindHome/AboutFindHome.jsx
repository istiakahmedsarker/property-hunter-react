import React from 'react';
import AboutUsSectionTitle from '../AboutUsSectionTitle/AboutUsSectionTitle';
import { PiHandshakeThin } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { GiVillage } from 'react-icons/gi';

const AboutFindHome = () => {
  return (
    <div className="lg:max-w-7xl md:w-11/12 w-11/12 mx-auto my-10 grid lg:grid-cols-12 gap-8 grid-cols-1 ">
      <div className="col-span-7">
        {' '}
        <div className="grid grid-cols-3 gap-5 h-full ">
          <img
            className="h-full rounded-xl"
            src="https://i.ibb.co/XphCgxn/villa-3-3.jpg"
            alt=""
          />
          <img
            className="h-full rounded-xl"
            src="https://i.ibb.co/Rgs2M9s/villa-4-1.jpg"
            alt=""
          />
          <img
            className="h-full rounded-xl"
            src="https://i.ibb.co/JQ0hjny/villa-7-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-5 text-left pl-7">
        <AboutUsSectionTitle subTitle=" Find your new home"></AboutUsSectionTitle>
        <h3 className="text-left text-primary-dark dark:text-[#e5ebee]">
          Welcome to Property Hunter, your premier destination for all things
          real estate. We're dedicated to revolutionizing the way you buy, sell,
          and rent properties. Here's a glimpse into who we are, what we stand
          for, and how we can serve you better.
        </h3>
        <div>
          <div className="flex justify-start items-center gap-4 py-5 text-primary-dark dark:text-[#e5ebee]">
            <h3 className="text-5xl">
              <PiHandshakeThin className="text-gray-500" />
            </h3>
            <div className="text-left">
              <h3 className="font-bold text-lg">Sell your home</h3>
              <h3>Free Service</h3>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 py-5 text-primary-dark dark:text-[#e5ebee]">
            <h3 className="text-5xl">
              <BsBarChart className="text-gray-500" />
            </h3>
            <div className="text-left">
              <h3 className="font-bold text-lg">Buy a home</h3>
              <h3>No fees asked</h3>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 py-5 text-primary-dark dark:text-[#e5ebee]">
            <h3 className="text-5xl">
              <BiTask className="text-gray-500" />
            </h3>
            <div className="text-left">
              <h3 className="font-bold text-lg">Free Appraisal</h3>
              <h3>No fees asked</h3>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 py-5 text-primary-dark dark:text-[#e5ebee]">
            <h3 className="text-5xl">
              <GiVillage className="text-gray-500" />
            </h3>
            <div className="text-left">
              <h3 className="font-bold text-lg">Free Photoshoot</h3>
              <h3>Professional service</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFindHome;
