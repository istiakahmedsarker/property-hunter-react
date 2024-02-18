import Container from "../../Container/Container";
import ContactForm from "../ContactFrom/ContactFrom";
import { GrMapLocation } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";



const ContactUs = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-start mt-8 mx-auto relative">
          <div className="flex-1 mx-auto px-2 text-wrap z-40">
            <div className="mb-6">
              <h1 className="text-3xl dark:text-in-dark font-bold mb-1">
                Discover Your Dream Home with Property Hunter
              </h1>
              <p className="text-xl text-gray-400">
                Contact Us to Unlock the Door to Your Perfect Rental Property
              </p>
            </div>
            {/* Contact Address */}
            <div>
              <div className="flex items-center lg:gap-2">
                <div className="text-4xl text-primary-light">
                    <GrMapLocation/>
                </div>
                <div className=" text-5xl font-extralight text-gray-300 -mr-4 hidden lg:inline-block">
                <IoIosArrowRoundForward/>
                </div>
                <div className="stat">
                  <div className="stat-title">Office Address</div>
                  <div className="stat-desc text-lg text-black text-wrap dark:text-in-dark">Humayun Road, Mohammadpur, Dhaka 1207</div>
                </div>
              </div>
              <div className="flex items-center lg:gap-2">
                <div className="text-4xl text-primary-light">
                    <FiPhoneCall/>
                </div>
                <div className=" text-5xl font-extralight text-gray-300 -mr-4 hidden lg:inline-block">
                <IoIosArrowRoundForward/>
                </div>
                <div className="stat">
                  <div className="stat-title">Request a call back</div>
                  <div style={{ gridColumnStart: 1, whiteSpace: 'nowrap', fontSize: '2rem', lineHeight: '2rem', fontWeight: 800 }} className="stat-value text-primary-light text-wrap dark:text-in-dark">314-555-0123</div>
                </div>
              </div>
              <div className="flex items-center lg:gap-2">
                <div className="text-4xl text-primary-light">
                    <BiMailSend/>
                </div>
                <div className=" text-5xl font-extralight text-gray-300 -mr-4 hidden lg:inline-block">
                <IoIosArrowRoundForward/>
                </div>
                <div className="stat">
                  <div className="stat-title">Email us</div>
                  <div className="stat-desc text-lg text-primary-light dark:text-in-dark text-wrap">hellosupport@gmail.com</div>
                </div>
              </div>
            </div>
              
          </div>
          {/* Image */}
          <div className="absolute bottom-0 left-80 z-0 hidden lg:inline-block animate-pulse">
            <img
              src="https://i.ibb.co/cxkDpXK/Daco-4292203.png"
              alt=""
              className="w-[60%] opacity-60"
            />
          </div>
          <div className="absolute bottom-0 -left-20 z-0 hidden lg:inline-block">
            <img
              src="https://i.ibb.co/L1z48Qt/Building.png"
              alt=""
              className="w-[30%] opacity-30"
            />
          </div>
          {/* Contact From */}
          <div className="flex-1 z-40">
            <ContactForm />
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
