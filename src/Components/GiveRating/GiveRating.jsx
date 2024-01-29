import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const GiveRating = ({ setHover, setStarRating, hover, starRating }) => {
  return (
    <div className="flex gap-4 -ml-1">
      <div className="flex">
        {[...Array(5)].map((star, i) => {
          const currentRating = i + 1;
          return (
            <div key={i}>
              <label>
                <input
                  className="hidden"
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => {
                    setStarRating(currentRating);
                  }}
                />
                <AiFillStar
                  className=""
                  size={35}
                  color={
                    currentRating <= (hover || starRating)
                      ? '#EB6753'
                      : '#e4e5e9'
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </div>
          );
        })}
      </div>
      {/* <button
        className="px-3 text-sm rounded-sm font-semibold bg-primary-color text-white"
        onClick={handleRating}
      >
        Sumbit
      </button> */}
    </div>
  );
};

export default GiveRating;
