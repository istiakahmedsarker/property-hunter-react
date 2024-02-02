import { useState } from 'react';
import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
import { IoArrowUpOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import useGetData from '../../Hooks/useGetData';
import './Properties.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import TopButton from '../../Components/Shared/TopButton/TopButton';

const Properties = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [activePage, setActivePage] = useState(1);
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

  const handleCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {};

    for (let key in checkboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setCheckboxes(updatedCheckboxes);
  };

  const handleTypeCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {};

    for (let key in typecCheckboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setTypeCheckboxes(updatedCheckboxes);
  };

  const checkedItem = Object.keys(checkboxes).find(
    (checkbox) => checkboxes[checkbox]
  );
  const typeCheckedItem = Object.keys(typecCheckboxes).find(
    (checkbox) => typecCheckboxes[checkbox]
  );

  const [searchText, setSearchText] = useState('');
  const [isGrid, setIsGrid] = useState(false);

  const { data: propertiesData } = useGetData({
    key: [
      'properties',
      checkedItem,
      typeCheckedItem,
      selectedOption,
      limit,
      activePage,
      searchText,
    ],
    api: `/properties?propertyStatus=${
      checkedItem === 'all' ? '' : checkedItem
    }&propertyType=${
      typeCheckedItem === 'all' ? '' : typeCheckedItem
    }&sort=${selectedOption}&&page=${activePage}&limit=${limit}&title=${searchText}`,
  });

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // console.log(filteredCards);
  return (
    <div className="max-w-7xl mx-auto pt-8 pb-20">
      <div className="my-6">
        <h3 className="text-3xl font-semibold">Properties Forsale</h3>
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
                onChange={(e) => setSearchText(e.target.value)}
              />
              <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4" />
            </div>

            <select
              className="border-[2px] border-stone-200 px-4 py-3 rounded-md w-full text- font-medium text-stone-400"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
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

          {/* Listing status checkboxes */}

          {/* Property type checkboxes */}

          {/* order */}
        </div>
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
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                {propertiesData?.properties?.map((card) => (
                  <PropertiesCard key={card._id} card={card}></PropertiesCard>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5  my-6">
                {propertiesData?.properties?.map((card) => (
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

            {pages.map((pageNo) => (
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
      </div>
      {/* for scroll to top button */}
      <TopButton></TopButton>
    </div>
  );
};

export default Properties;
