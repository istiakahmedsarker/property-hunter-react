import React from 'react';
import Container from '../../../../Components/Container/Container';
import AboutUsSectionTitle from '../AboutUsSectionTitle/AboutUsSectionTitle';
import AboutUsBannerTitle from '../AboutUsBannerTitle/AboutUsBannerTitle';
import { Link } from 'react-router-dom';
import { PiWaveSquareBold } from 'react-icons/pi';

const AboutContact = () => {
  return (
    <div className="lg:max-w-7xl md:w-11/12 w-11/12 mx-auto min-h-[70vh] md:min-h-[70vh] relative overflow-hidden flex items-center justify-center rounded-xl">
      <div className="h-full w-full absolute z-30 bg-[#091538] opacity-10"></div>
      <img
        id="about"
        className=" absolute bottom-0 z-20 h-full w-full object-cover"
        src="https://i.ibb.co/1z2zXZZ/general-hr-raw.jpg"
        alt=""
      />

      <div className="h-full w-full bg-white absolute items-center  z-10 opacity-30"></div>

      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:px-5">
          <div className="flex-1 z-40 flex flex-col gap-6 items-center lg:gap-5 md:items-start text-center md:text-left text-black  dark:text-in-black">
            <div className="flex flex-col items-center justify-center mb-5 sm:mb-5 md:mb-5 lg:mb-5">
              <h3 className="text-center  px-4 md:px-6 py-1 md:text-base text-sm text-primary-dark dark:text-primary-dark  flex justify-center">
                <PiWaveSquareBold />
                <PiWaveSquareBold />
                <PiWaveSquareBold />
              </h3>
              <h5 className="text-center text-primary-dark dark:text-primary-dark  text-2xl md:text-3xl font-bold mt-2">
                Get your dream house
              </h5>
            </div>

            <div className="overflow-hidden">
              <h3 className=" text-sm md:text-lg lg:text-lg xl:text-lg text-black dark:text-in-black">
                Get in touch with us and our experts and developers would love
                to contribute their expertise and insights and help you today.
              </h3>
            </div>
            <Link to="/#contact-us">
              <button className="text-animation py-3 px-6 lg:px-8 rounded-sm  transition-bg duration-300 ease-in-out  text-white hover:bg-[#0e87cd] hover:drop-shadow-xl bg-primary-light">
                Send Email
              </button>
            </Link>
          </div>
          <div className="flex-1 z-40 h-full">
            <div className="rounded-xl slide-right w-[35vw] ml-auto hidden  md:block  md:h-[300px] lg:h-[450px]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutContact;
