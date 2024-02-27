import React from 'react';
import AboutUsBanner from './Component/AboutUsBanner/AboutUsBanner';
import AboutCompany from './Component/AboutCompany/AboutCompany';
import AboutFindHome from './Component/AboutFindHome/AboutFindHome';
import AboutContact from './Component/AboutContact/AboutContact';

const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner></AboutUsBanner>
      <AboutCompany></AboutCompany>
      <AboutFindHome></AboutFindHome>
      <AboutContact></AboutContact>
    </div>
  );
};

export default AboutUs;
