import { useEffect, useState } from 'react';
import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
import { FiSearch } from 'react-icons/fi';
import useGetData from '../../Hooks/useGetData';
import './Properties.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import TopButton from '../../Components/Shared/TopButton/TopButton';
import useDebounce from '../../Hooks/useDebounce';
// for explore property
import { useLocation } from 'react-router-dom';

const Properties = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  const debouncedSearchValue = useDebounce(searchText, 800);
  // for explore type
  const location = useLocation();
  const propertyTypeParam = new URLSearchParams(location.search).get(
    'propertyType'
  );

  console.log('Property Type:', propertyTypeParam);

  const limit = 6;
  const [checkboxes, setCheckboxes] = useState({
    all: true,
    rent: false,
    sale: false,
  });

  const [typecCheckboxes, setTypeCheckboxes] = useState({
    all: true,
    apartment: false,
    office: false,
    villa: false,
  });

  const handleCheckboxChange = checkboxName => {
    const updatedCheckboxes = {};

    for (let key in checkboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setCheckboxes(updatedCheckboxes);
  };

  const handleTypeCheckboxChange = checkboxName => {
    const updatedCheckboxes = {};

    for (let key in typecCheckboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setTypeCheckboxes(updatedCheckboxes);
  };

  const checkedItem = Object.keys(checkboxes).find(
    checkbox => checkboxes[checkbox]
  );
  const typeCheckedItem = Object.keys(typecCheckboxes).find(
    checkbox => typecCheckboxes[checkbox]
  );
  // for explore Type
  const propertyType = typeCheckedItem || propertyTypeParam || 'all';

  const { data: propertiesData, isPending } = useGetData({
    key: [
      'properties',
      checkedItem,
      typeCheckedItem,
      selectedOption,
      limit,
      activePage,
      debouncedSearchValue,
      propertyType,
    ],
    api: `/properties?propertyStatus=${
      checkedItem === 'all' ? '' : checkedItem
    }&propertyType=${
      typeCheckedItem === 'all' ? '' : typeCheckedItem
    }&sort=${selectedOption}&page=${activePage}&limit=${limit}&title=${searchText}`,
  });
  // console.log('API Response:', propertiesData);

  const totalPage = Math.ceil(parseInt(propertiesData?.totalProperty) / limit);

  let pages = [];
  const totalPageCalc = () => {
    for (let x = 1; x <= totalPage; x++) {
      pages.push(x);
    }
  };
  totalPageCalc();

  const previousPage = () => {
    if (activePage === 1) return activePage;
    setActivePage(activePage - 1);
  };

  const nextPage = () => {
    if (activePage === totalPage) return activePage;
    setActivePage(activePage + 1);
  };

  // for scroll to top
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  // console.log(filteredCards);

  if (isPending) {
    return (
      <p className="h-[90vh] flex flex-col items-center justify-center text-center">
        Loading...
      </p>
    );
  }
  return (
    <div className="max-w-7xl mx-auto pt-8 pb-20">
      <div className="my-6">
        <h3 className="text-3xl font-semibold">Properties For sale</h3>
      </div>
      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-4">
          {/* search field filtering */}
          <div className="bg-white flex flex-col gap-9 shadow-sm rounded-md p-8 w-full ">
            <h3 className="text-lg text-[#041e42] font-semibold ">
              Find your home
            </h3>
            <div className="relative -mt-5">
              <input
                className="border-2  w-full pl-12 pr-5 py-3 text-lg text-stone-700  rounded-md"
                type="text"
                value={searchText}
                placeholder="Search here"
                onChange={e => setSearchText(e.target.value)}
              />
              <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4" />
            </div>

            <select
              className="border-[2px] border-stone-200 px-4 py-3 rounded-md w-full text- font-medium text-stone-400"
              value={selectedOption}
              onChange={e => setSelectedOption(e.target.value)}
            >
              <option value="-price">High to Low</option>
              <option value="price">Low to High</option>
            </select>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg text-[#041e42] font-semibold -mt-2">
                Listing Status
              </h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={checkboxes.all}
                    onChange={() => handleCheckboxChange('all')}
                  />
                  <label>All</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={checkboxes.rent}
                    onChange={() => handleCheckboxChange('rent')}
                  />
                  <label>Rent</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={checkboxes.sale}
                    onChange={() => handleCheckboxChange('sale')}
                  />
                  <label>Sale</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">Property Type</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={typecCheckboxes.all}
                    onChange={() => handleTypeCheckboxChange('all')}
                  />
                  <label>All</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={typecCheckboxes.apartment}
                    onChange={() => handleTypeCheckboxChange('apartment')}
                  />
                  <label>Apartment</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={typecCheckboxes.office}
                    onChange={() => handleTypeCheckboxChange('office')}
                  />
                  <label>Office</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={typecCheckboxes.villa}
                    onChange={() => handleTypeCheckboxChange('villa')}
                  />
                  <label>Villa</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!propertiesData?.properties?.length ? (
          <div className="md:col-span-8 sm:w-[70%] mx-auto md:w-full">
            <p className=" h-[70vh] flex-col flex items-center justify-center">
              No more items available
            </p>
          </div>
        ) : (
          <div
            className="col-span-8 flex flex-col gap-16
        "
          >
            <div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold">
                  {/* Show for All Properties :{propertiesCards.length || 0} */}
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  {propertiesData?.properties?.map(card => (
                    <PropertiesCard key={card._id} card={card}></PropertiesCard>
                  ))}
                </div>
              ) : (
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5  my-6">
                  {propertiesData?.properties?.map(card => (
                    <PropertiesCardList
                      key={card._id}
                      card={card}
                    ></PropertiesCardList>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center gap-5">
              <button
                className={`${
                  activePage === 1
                    ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                    : 'bg-white p-3 shadow-md rounded-full'
                }`}
                onClick={previousPage}
              >
                <FaArrowLeft />
              </button>

              {pages.map(pageNo => (
                <button
                  className={`${
                    activePage === pageNo
                      ? 'bg-[#EB6753] font-semibold text-white px-4 py-2 rounded-full'
                      : 'px-4 py-2 rounded-full font-semibold bg-white shadow-md'
                  } `}
                  key={pageNo}
                  onClick={() => setActivePage(pageNo)}
                >
                  {pageNo}
                </button>
              ))}

              <button
                className={`${
                  activePage === totalPage
                    ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                    : 'bg-white p-3 shadow-md rounded-full'
                }`}
                onClick={nextPage}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* for scroll to top button */}
      <TopButton></TopButton>
    </div>
  );
};

export default Properties;
// import React, { useEffect, useState } from 'react';
// import getAllCard from '../../../lib/getAllCard';
// import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
// import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
// // import { IoArrowUpOutline } from 'react-icons/io5';
// import TopButton from '../../Components/Shared/TopButton/TopButton';
// import './PropertiesStyle.css';
// import { FcNext, FcPrevious } from 'react-icons/fc';

// const Properties = ({ initialCards = [] }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isGrid, setIsGrid] = useState(false);
//   const [cards, setCards] = useState(initialCards);
//   // filter with listing status
//   const [showAll, setShowAll] = useState(true);
//   const [showBuy, setShowBuy] = useState(true);
//   const [showRent, setShowRent] = useState(true);

//   // Filter with property type
//   const [showAllPropertyTypes, setShowAllPropertyTypes] = useState(true);
//   // const [showHouse, setShowHouse] = useState(true);
//   const [showApartment, setShowApartment] = useState(true);
//   const [showBuilding, setShowBuilding] = useState(true);
//   // const [showOffice, setShowOffice] = useState(true);
//   // const cards = await getAllCard();
//   // for pagination
//   // const [page, setPage] = useState(1);
//   useEffect(() => {
//     const fetchCards = async () => {
//       const allCards = await getAllCard();
//       setCards(allCards);
//     };
//     fetchCards();
//   }, []);
//   // console.log(cards.data);
//   const propertiesCards = cards?.data?.properties || [];
//   const filteredCards = propertiesCards.filter(card => {
//     const lowerCaseTitle = card.propertyTitle.toLowerCase();
//     const lowerCaseSearchQuery = searchQuery.toLowerCase();
//     const isTitleMatch = lowerCaseTitle.includes(lowerCaseSearchQuery);

//     // Apply listing status filters
//     if (showAll) return isTitleMatch;
//     if (showBuy && card.propertyStatus === 'sale') return isTitleMatch;
//     if (showRent && card.propertyStatus === 'rent') return isTitleMatch;

//     // Apply property type filters
//     const isPropertyTypeMatch =
//       showAllPropertyTypes ||
//       // (showHouse && card.propertyType === 'house')

//       (showApartment && card.propertyType === 'apartment') ||
//       (showBuilding && card.propertyType === 'villa');
//     // ||(showOffice && card.propertyType === 'office');

//     return isTitleMatch && isPropertyTypeMatch;
//   });
//   // for scroll to top
//   // const scrollToTop = () => {
//   //   window.scrollTo({ top: 0, behavior: 'smooth' });
//   // };
//   // for pagination
//   // const limit = 5;
//   // const totalPage = cards?.data?.total
//   //   ? Math.ceil(parseInt(data.data.total) / limit)
//   //   : 0;
//   // // const totalPage = Math.ceil(parseInt(data?.data?.total) / limit);
//   // console.log(totalPage);
//   // const handlePrev = () => {
//   //   if (page > 1) {
//   //     setPage(page - 1);
//   //     console.log(page);
//   //   }
//   // };
//   // const handleNext = () => {
//   //   if (page < totalPage) {
//   //     setPage(page + 1);
//   //     console.log(page);
//   //   }
//   // };
//   // console.log(filteredCards);
//   return (
//     <div className="w-11/12 mx-auto">
//       <div className="my-6">
//         <h3 className="text-3xl font-semibold">Properties For Sale</h3>
//         <h3>Homes/For Rent</h3>
//       </div>
//       <div className="grid grid-cols-12">
//         <div className="lg:col-span-3 md:col-span-4 col-span-12 px-3">
//           {/* search field filtering */}
//           <div className="w-full rounded-lg shadow-lg">
//             <input
//               type="text"
//               placeholder=" What are you looking for?"
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//               className="text-black px-4 py-3 w-full"
//             />
//           </div>

//           {/* Listing status checkboxes */}
//           <div className="w-full rounded-lg shadow-lg drop-shadow-lg bg-white px-5 py-6 my-4 ">
//             <h3 className="text-xl font-semibold py-3">Listing Status</h3>
//             <div className="flex flex-col space-y-2">
//               <label
//               // className="custom-checkbox"
//               >
//                 <input
//                   className="mr-2"
//                   type="checkbox"
//                   checked={showAll}
//                   onChange={() => setShowAll(!showAll)}
//                 />
//                 Show All
//               </label>
//               <label
//               // className="custom-checkbox"
//               >
//                 <input
//                   className="mr-2"
//                   type="checkbox"
//                   checked={showBuy}
//                   onChange={() => setShowBuy(!showBuy)}
//                 />
//                 For Sale
//               </label>
//               <label
//               // className="custom-checkbox"
//               >
//                 <input
//                   className="mr-2 px-1 py-1"
//                   type="checkbox"
//                   checked={showRent}
//                   onChange={() => setShowRent(!showRent)}
//                 />
//                 For Rent
//               </label>
//             </div>
//           </div>
//           {/* Property type checkboxes */}
//           <div className="w-full rounded-lg shadow-lg drop-shadow-lg bg-white  px-5 py-6 my-4">
//             <h3 className="text-xl font-semibold py-3">Property Type</h3>
//             <div className="flex flex-col space-y-2">
//               <label>
//                 <input
//                   className="mr-2"
//                   type="checkbox"
//                   checked={showAllPropertyTypes}
//                   onChange={() => {
//                     setShowAllPropertyTypes(!showAllPropertyTypes);
//                     // setShowHouse(true);
//                     setShowApartment(true);
//                     setShowBuilding(true);
//                     // setShowOffice(true);
//                   }}
//                 />
//                 Show All
//               </label>

//               <label>
//                 <input
//                   className="mr-2"
//                   type="checkbox"
//                   // type="text"
//                   checked={showApartment}
//                   onChange={() => setShowApartment(!showApartment)}
//                 />
//                 Apartment
//               </label>
//               <label>
//                 <input
//                   className="mr-2"
//                   type="checkbox"
//                   checked={showBuilding}
//                   onChange={() => setShowBuilding(!showBuilding)}
//                 />
//                 Villa
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-9 md:col-span-8 col-span-12">
//           <div className="flex justify-between">
//             <h4 className="text-xl font-semibold">
//               Show for All Properties :{filteredCards.length || 0}
//             </h4>
//             {!isGrid ? (
//               <button
//                 onClick={() => setIsGrid(true)}
//                 className="text-[#eb6753] font-semibold"
//               >
//                 List view
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsGrid(false)}
//                 className="text-[#eb6753] font-semibold"
//               >
//                 Grid View
//               </button>
//             )}
//           </div>
//           {!isGrid ? (
//             <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 lg:px-5">
//               {filteredCards.map(card => (
//                 <PropertiesCard key={card._id} card={card}></PropertiesCard>
//               ))}
//             </div>
//           ) : (
//             <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 lg:px-5 my-6">
//               {filteredCards.map(card => (
//                 <PropertiesCardList
//                   key={card._id}
//                   card={card}
//                 ></PropertiesCardList>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       {/* for pagination */}
//       {/* <div className="flex justify-center items-center">
//         <button
//           className="bg-[#eb6753] h-7 w-7 rounded-full "
//           onClick={handlePrev}
//         >
//           <span>
//             <FcPrevious></FcPrevious>{' '}
//           </span>
//         </button>
//         {Array(totalPage)
//           .fill(0)
//           .map((item, index) => {
//             const pageNumber = index + 1;
//             return (
//               <button
//                 key={pageNumber}
//                 onClick={() => setPage(pageNumber)}
//                 className={`${
//                   pageNumber === page
//                     ? 'bg-blue-400  h-7 w-7 m-2 rounded-full  '
//                     : ' bg-white  m-2 rounded-lg'
//                 }`}
//               >
//                 {pageNumber}
//               </button>
//             );
//           })}
//         <button
//           className="bg-[#eb6753] h-7 w-7 rounded-full "
//           onClick={handleNext}
//         >
//           <span>
//             <FcNext className="text-white text-center"></FcNext>
//           </span>
//         </button>
//       </div> */}
//       {/* for scroll to top button */}
//       <TopButton></TopButton>
//     </div>
//   );
// };

// export default Properties;
