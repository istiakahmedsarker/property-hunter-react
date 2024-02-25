import React, { useEffect, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // for add  invisible effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {/* for scroll to top button */}
      {isVisible && (
        <div className="fixed bottom-10 right-5">
          <button
            onClick={scrollToTop}
            className="bg-[#076aa5] text-white px-4 py-4 rounded-t-2xl"
          >
            <IoArrowUpOutline />
          </button>
        </div>
      )}
    </div>
  );
};

export default TopButton;
