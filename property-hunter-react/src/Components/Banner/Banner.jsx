"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const glowStyles = {
        transition: '0.3s',
        textShadow: isHovered ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff' : 'none',

    };

    return (
        <div>
            <div className="hero min-h-screen"
                 data-aos="zoom-out-down"
                style={{ backgroundImage: 'url(https://i.ibb.co/gRHfWXv/sun-sunlight-bright-outdoor-sky.jpg)' }}>
                <img
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="w-fit mx-auto shadow-md" src="https://i.ibb.co/vdrh6LP/pexels-binyamin-mellish-106399-removebg.png" alt="" />

                <div className=""></div>
                <div className="hero-content text-center ">

                    <div className="-mt-96">

                        <h2 data-aos="zoom-in-down" className='text-center text-8xl text-white font-mono ' >Property</h2>
                        <div onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={glowStyles}>
                            <h1 data-aos="zoom-out-up" className='text-[#eb6753] text-center text-9xl hover:'>H u n t e r</h1>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Banner;