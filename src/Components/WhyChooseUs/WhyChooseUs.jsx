import React from 'react';
import { FaHeadphones, FaHandshakeSimple, FaComments } from 'react-icons/fa6';
import {
  IoFilterSharp,
  IoAccessibility,
  IoChatboxEllipses,
} from 'react-icons/io5';
import { BsFilterSquareFill } from 'react-icons/bs';
import SectionTitle from '../SectionTitle/SectionTitle';

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20 text-primary-dark dark:text-[#e5ebee]">
      <SectionTitle
        title="Why Choose Us"
        subTitle="Exploring Reasons Behind Letting Go"
      />

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <FaHeadphones size={30} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">Support</h3>
              <p className="text-sm text-muted-foreground">
                We provide dedicated support and guidance throughout the buying
                or selling process, from initial consultation to closing.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <IoAccessibility size={30} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">
                Accessibility and Availability
              </h3>
              <p className="text-sm text-muted-foreground">
                our team is readily accessible and committed to providing prompt
                responses to your inquiries and addressing any concerns you may
                have.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <FaComments size={30} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">Communication</h3>
              <p className="text-sm text-muted-foreground">
                Our team prioritizes transparent communication, keeping you
                informed at every stage. We are accessible, prompt, and
                committed to your satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <FaHandshakeSimple size={30} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">Negotiation Skills</h3>
              <p className="text-sm text-muted-foreground">
                Our teams expertise in negotiation to secure the best deals for
                clients, whether they are buying or selling properties.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <IoChatboxEllipses size={30} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">Live Chat Support</h3>
              <p className="text-sm text-muted-foreground">
                Offer live chat support to assist users in real-time with any
                inquiries, questions, or technical issues they may encounter
                while using the website or mobile app
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-card-dark p-2">
          <div className="flex flex-col  justify-between items-center rounded-md p-6">
            <div className="mb-4">
              <BsFilterSquareFill size={26} />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">Filtering</h3>
              <p className="text-sm text-muted-foreground">
                Implement advanced filtering options that allow users to refine
                their property search based on specific criteria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
