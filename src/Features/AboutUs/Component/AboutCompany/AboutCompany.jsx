import React from 'react';
import AboutUsSectionTitle from '../AboutUsSectionTitle/AboutUsSectionTitle';

const AboutCompany = () => {
  return (
    <div className="lg:max-w-7xl md:w-11/12 w-11/12 mx-auto my-10">
      <div>
        <AboutUsSectionTitle subTitle=" About Our Company"></AboutUsSectionTitle>
      </div>
      <div className=" lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className="px-5 py-5 text-primary-dark dark:text-[#e5ebee]">
          <h3 className="text-lg font-semibold py-3">Our Mission</h3>
          <h3>
            At Property Hunter, our mission is to empower individuals and
            families to find their dream properties and make informed real
            estate decisions. We're committed to providing unparalleled service,
            expert guidance, and innovative tools to ensure that every step of
            your real estate journey is smooth, efficient, and rewarding.
          </h3>
        </div>
        <div className="px-5 py-5 text-primary-dark dark:text-[#e5ebee]">
          {' '}
          <h3 className="text-lg font-semibold py-3">Our Vision</h3>
          <h3>
            Our vision at Property Hunter is to become the go-to platform for
            all real estate needs, setting the standard for excellence in the
            industry. We aim to leverage technology, data-driven insights, and a
            customer-centric approach to redefine the real estate experience and
            create lasting value for our clients and partners.
          </h3>
        </div>
        <div className="px-5 py-5 text-primary-dark dark:text-[#e5ebee]">
          {' '}
          <h3 className="text-lg font-semibold py-3">Our Values</h3>
          <h3>
            At Property Hunter, integrity is our cornerstone. We prioritize
            honesty, transparency, and ethical conduct in all our dealings,
            fostering trust and credibility with our clients and partners.
            Excellence is our standard. We strive for nothing less than the
            best, setting high benchmarks for service quality, professionalism,
            and innovation.
          </h3>
        </div>
        <div className="px-5 py-5 text-primary-dark dark:text-[#e5ebee]">
          {' '}
          <h3 className="text-lg font-semibold py-3">Our Resources</h3>
          <h3>
            At Property Hunter, we leverage cutting-edge technology to
            streamline your property search and transaction processes, providing
            you with access to advanced search and analysis tools that simplify
            the journey to your dream property. ensuring that you receive the
            support you need to make informed decisions and achieve your real
            estate goals.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
