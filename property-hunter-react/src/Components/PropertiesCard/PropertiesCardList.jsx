import React from 'react';

const PropertiesCardList = ({ card }) => {
  const { propertyTitle, propertyImages } = card;
  return (
    <div>
      <h3 className="font-bold my-2">{card.propertyTitle}</h3>
      <h3>list card</h3>
    </div>
  );
};

export default PropertiesCardList;
