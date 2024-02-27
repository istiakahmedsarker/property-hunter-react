import React from 'react';
import Container from '../../../../Components/Container/Container';
import AboutUsBannerTitle from '../AboutUsBannerTitle/AboutUsBannerTitle';

const AboutUsBanner = () => {
  return (
    <div className="min-h-[70vh] w-full md:min-h-[70vh] relative overflow-hidden flex items-center justify-center">
      <div className="h-full w-full absolute z-30 bg-[#091538] opacity-50"></div>
      <img
        id="about"
        className=" absolute bottom-0 z-20 h-full w-full object-cover"
        src="https://i.ibb.co/FDfVpvs/1660332489082.jpg"
        alt=""
      />

      <div className="h-full w-full bg-white absolute items-center  z-10 opacity-30"></div>
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full md:px-5">
          <div className=" z-40 flex flex-col gap-6 items-center lg:gap-12 md:items-start text-center md:text-center">
            <AboutUsBannerTitle
              title=""
              subTitle=" More About Us"
            ></AboutUsBannerTitle>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsBanner;
