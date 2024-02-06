import React from 'react';

const RecommendedProperty = ({ cardDetails }) => {
  // console.log(cardDetails?.data?.property?.propertyType);
  const type = cardDetails?.data?.property?.propertyType || '';
  console.log(type);

  return (
    <div>
      <h3>recommended property {type}</h3>
    </div>
  );
};

export default RecommendedProperty;
