import Lottie from "lottie-react";
import AnnouncementBanner from "../../Pages/Dashboard/Announcement/Lottie/AnnouncementBannerAnim.json";

const SectionHeader = ({ header }) => {
  return (
    <div className="bg-gradient-to-tr from-primary-light dark:from-[#0886ce] dark:via-[white] via-[#202020] dark:to-[#d1f480f3] to-[#b2ec2b] flex flex-row-reverse h-[40vh] lg:h-[40vh] p-2 md:p-6 rounded-xl top-0 px-4 md:px-8">
        <div className="external-img  flex items-center justify-center w-auto lg:w-[300px] h-full">
          {/* <img src="https://i.ibb.co/6wBbg67/announcement.png" alt=""  className="h-full object-contain"/> */}
          <Lottie animationData={AnnouncementBanner} loop={true} className="h-full w-full object-contain"/>
        </div>
          <div className="header-description text-white dark:text-gray-900 space-y-2 flex-1 flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Announcements</h1>
            <p className="text-gray-300 dark:text-gray-700 font-normal text-xs md:text-sm lg:text-lg">Welcome to our announcement page. Stay updated with the latest news and notices.</p>
          </div>
      </div>
  );
};

export default SectionHeader;
