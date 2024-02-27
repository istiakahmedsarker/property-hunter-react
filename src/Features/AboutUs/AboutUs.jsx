import React from 'react';
import AboutUsBanner from './Component/AboutUsBanner/AboutUsBanner';
import AboutCompany from './Component/AboutCompany/AboutCompany';
import AboutFindHome from './Component/AboutFindHome/AboutFindHome';
import AboutContact from './Component/AboutContact/AboutContact';
import PageTitle from '../PageTitle/PageTitle';

const AboutUs = () => {
  return (
    <div>
      <PageTitle title="Property Hunter || About"></PageTitle>
      <AboutUsBanner></AboutUsBanner>
      <AboutCompany></AboutCompany>
      <AboutFindHome></AboutFindHome>
      <AboutContact></AboutContact>
    </div>
  );
};

export default AboutUs;
