import React, { useEffect, useState } from 'react';
import getAllCard from '../../../lib/getAllCard';
import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
// import { IoArrowUpOutline } from 'react-icons/io5';
import TopButton from '../../Components/Shared/TopButton/TopButton';
import useDebounce from '../../Hooks/useDebounce';

const Properties = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  const debouncedSearchValue = useDebounce(searchText, 800);

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

  const { data: propertiesData, isPending } = useGetData({
    key: [
      'properties',
      checkedItem,
      typeCheckedItem,
      selectedOption,
      limit,
      activePage,
      debouncedSearchValue,
    ],
    api: `/properties?propertyStatus=${
      checkedItem === 'all' ? '' : checkedItem
    }&propertyType=${
      typeCheckedItem === 'all' ? '' : typeCheckedItem
    }&sort=${selectedOption}&&page=${activePage}&limit=${limit}&title=${searchText}`,
  });
  // for scroll to top
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  // for pagination
  // const limit = 5;
  // const totalPage = cards?.data?.total
  //   ? Math.ceil(parseInt(data.data.total) / limit)
  //   : 0;
  // // const totalPage = Math.ceil(parseInt(data?.data?.total) / limit);
  // console.log(totalPage);
  // const handlePrev = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //     console.log(page);
  //   }
  // };
  // const handleNext = () => {
  //   if (page < totalPage) {
  //     setPage(page + 1);
  //     console.log(page);
  //   }
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
    <div className="w-11/12 mx-auto">
      <div className="my-6">
        <h3 className="text-3xl font-semibold">Properties For Sale</h3>
        <h3>Homes/For Rent</h3>
      </div>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 px-3">
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
        )}
      </div>
      {/* for pagination */}
      {/* <div className="flex justify-center items-center">
        <button
          className="bg-[#eb6753] h-7 w-7 rounded-full "
          onClick={handlePrev}
        >
          <span>
            <FcPrevious></FcPrevious>{' '}
          </span>
        </button>
        {Array(totalPage)
          .fill(0)
          .map((item, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`${
                  pageNumber === page
                    ? 'bg-blue-400  h-7 w-7 m-2 rounded-full  '
                    : ' bg-white  m-2 rounded-lg'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        <button
          className="bg-[#eb6753] h-7 w-7 rounded-full "
          onClick={handleNext}
        >
          <span>
            <FcNext className="text-white text-center"></FcNext>
          </span>
        </button>
      </div> */}
      {/* for scroll to top button */}
      <TopButton></TopButton>
    </div>
  );
};

export default Properties;