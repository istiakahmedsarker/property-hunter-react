import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <AiFillStar className="text-[#EB6753] text-sm" />
        ) : (
          <AiOutlineStar className="text-[#EB6753] text-sm" />
        )}
      </span>
    );
  });
  return <div className="flex">{ratingStar}</div>;
};

export default Star;
