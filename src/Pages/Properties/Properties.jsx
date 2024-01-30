import React, { useEffect, useState } from 'react';
import getAllCard from '../../../lib/getAllCard';
import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';

const Properties = ({ initialCards = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  const [cards, setCards] = useState(initialCards);
  // filter with listing status
  const [showAll, setShowAll] = useState(true);
  const [showBuy, setShowBuy] = useState(true);
  const [showRent, setShowRent] = useState(true);

  // Filter with property type
  const [showAllPropertyTypes, setShowAllPropertyTypes] = useState(true);
  // const [showHouse, setShowHouse] = useState(true);
  const [showApartment, setShowApartment] = useState(true);
  const [showBuilding, setShowBuilding] = useState(true);
  // const [showOffice, setShowOffice] = useState(true);
  // const cards = await getAllCard();
  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await getAllCard();
      setCards(allCards);
    };
    fetchCards();
  }, []);
  // console.log(cards.data);
  const propertiesCards = cards?.data?.properties || [];
  const filteredCards = propertiesCards.filter(card => {
    const lowerCaseTitle = card.propertyTitle.toLowerCase();
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const isTitleMatch = lowerCaseTitle.includes(lowerCaseSearchQuery);

    // Apply listing status filters
    if (showAll) return isTitleMatch;
    if (showBuy && card.propertyStatus === 'sale') return isTitleMatch;
    if (showRent && card.propertyStatus === 'rent') return isTitleMatch;

    // Apply property type filters
    const isPropertyTypeMatch =
      showAllPropertyTypes ||
      // (showHouse && card.propertyType === 'house')

      (showApartment && card.propertyType === 'apartment') ||
      (showBuilding && card.propertyType === 'villa');
    // ||(showOffice && card.propertyType === 'office');

    return isTitleMatch && isPropertyTypeMatch;
  });

  console.log(filteredCards);
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-4">
        <h3 className="text-3xl font-semibold">Homes For Sale</h3>
        <h3>Homes/For Rent</h3>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 px-3">
          {/* search field filtering */}
          <div className="w-full rounded-lg shadow-lg">
            <input
              type="text"
              placeholder=" What are you looking for?"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="text-black px-4 py-3 w-full"
            />
          </div>

          {/* Listing status checkboxes */}
          <div>
            <h3 className="text-xl font-semibold py-3">Listing Status</h3>
            <div className="flex flex-col space-y-2">
              <label>
                <input
                  type="checkbox"
                  checked={showAll}
                  onChange={() => setShowAll(!showAll)}
                />
                Show All
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={showBuy}
                  onChange={() => setShowBuy(!showBuy)}
                />
                For Sale
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={showRent}
                  onChange={() => setShowRent(!showRent)}
                />
                For Rent
              </label>
            </div>
          </div>
          {/* Property type checkboxes */}
          <div>
            <h3 className="text-xl font-semibold py-3">Property Type</h3>
            <div className="flex flex-col space-y-2">
              <label>
                <input
                  type="checkbox"
                  checked={showAllPropertyTypes}
                  onChange={() => {
                    setShowAllPropertyTypes(!showAllPropertyTypes);
                    // setShowHouse(true);
                    setShowApartment(true);
                    setShowBuilding(true);
                    // setShowOffice(true);
                  }}
                />
                Show All
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={showApartment}
                  onChange={() => setShowApartment(!showApartment)}
                />
                Apartment
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={showBuilding}
                  onChange={() => setShowBuilding(!showBuilding)}
                />
                Villa
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex justify-between">
            <h4 className="text-xl font-semibold">
              Show for All Properties :{filteredCards.length || 0}
            </h4>
            {!isGrid ? (
              <button
                onClick={() => setIsGrid(true)}
                className="text-[#eb6753] font-semibold"
              >
                List view
              </button>
            ) : (
              <button
                onClick={() => setIsGrid(false)}
                className="text-[#eb6753] font-semibold"
              >
                Grid View
              </button>
            )}
          </div>
          {!isGrid ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-5">
              {filteredCards.map(card => (
                <PropertiesCard key={card._id} card={card}></PropertiesCard>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 lg:px-5 my-6">
              {filteredCards.map(card => (
                <PropertiesCardList
                  key={card._id}
                  card={card}
                ></PropertiesCardList>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
