import Lottie from 'lottie-react';
import React from 'react';
import Announcement from "../Lottie/Announcement.json";


const AnnouncementLoader = () => {
    return (
        <div className='fixed dark:bg-primary-dark bg-[#fff] opacity-90 top-0 left-0 min-h-screen w-full flex items-center justify-center'>
            <div className=''>
                <Lottie animationData={Announcement} loop={true}/>
            </div>
        </div>
    );
};

export default AnnouncementLoader;