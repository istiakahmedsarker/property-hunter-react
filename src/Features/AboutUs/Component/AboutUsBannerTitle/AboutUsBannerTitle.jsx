import React from 'react';
import { PiWaveSquareBold } from 'react-icons/pi';

const AboutUsBannerTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <h3 className="text-center  px-4 md:px-6 py-1 md:text-base text-lg   text-white flex justify-center">
        <PiWaveSquareBold />
        <PiWaveSquareBold />
        <PiWaveSquareBold />
        {/* {title} */}
      </h3>
      <h5 className="m-0 text-animation text-5xl md:text-5xl lg:text-xl xl:text-5xl text-white font-bold dark:text-in-dark">
        {subTitle}
      </h5>
    </div>
  );
};

export default AboutUsBannerTitle;
