import { useCallback, useState } from 'react';
import PropertiesCard from '../Properties/Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../Properties/Components/PropertiesCard/PropertiesCardList';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import TopButton from '../Properties/Components/TopButton/TopButton';
import useGetData from '../../Hooks/useGetData';
import useDebounce from '../../Hooks/useDebounce';
import PropertyFilter from '../Properties/Components/PropertyFilter/PropertyFilter';
import { IoFilter } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NoItems from '../../Components/NoItems/NoItems';

const Properties = () => {
  const [checkboxes, setCheckboxes] = useState({
    all: true,
    rent: false,
    sale: false,
  });

  const [typeCheckboxes, setTypeCheckboxes] = useState({
    all: true,
    apartment: false,
    office: false,
    villa: false,
  });
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [isGrid, setIsGrid] = useState(false);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const debouncedSearchValue = useDebounce(searchText, 800);
  const limit = 6;

  const checkedItem = Object.keys(checkboxes).find(
    (checkbox) => checkboxes[checkbox]
  );

  const typeCheckedItem = Object.keys(typeCheckboxes).find(
    (checkbox) => typeCheckboxes[checkbox]
  );

  const handleCheckboxChange = useCallback(
    (checkboxName) => {
      const updatedCheckboxes = {};

      for (let key in checkboxes) {
        updatedCheckboxes[key] = key === checkboxName;
      }

      setCheckboxes(updatedCheckboxes);
      setActivePage(1);
    },
    [checkboxes]
  );

  const handleTypeCheckboxChange = useCallback(
    (checkboxName) => {
      const updatedCheckboxes = {};

      for (let key in typeCheckboxes) {
        updatedCheckboxes[key] = key === checkboxName;
      }

      setTypeCheckboxes(updatedCheckboxes);
      setActivePage(1);
    },
    [typeCheckboxes]
  );

  const { data: propertiesData, isPending, error } = useGetData({
    key: [
      'properties',
      checkedItem,
      typeCheckedItem,
      selectedOption,
      limit,
      activePage,
      debouncedSearchValue,
      bedrooms,
      bathrooms,
    ],
    api: `/properties?propertyStatus=${
      checkedItem === 'all' ? '' : checkedItem
    }&propertyType=${
      typeCheckedItem === 'all' ? '' : typeCheckedItem
    }&sort=${selectedOption}&page=${activePage}&limit=${limit}&title=${searchText}&bedrooms=${
      bedrooms === 'all' ? '' : bedrooms
    }&bathrooms=${bathrooms === 'all' ? '' : bathrooms}`,
  });

  // for pagination
  const totalPage = Math.ceil(
    parseInt(propertiesData?.data?.totalProperty) / limit
  );

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

  if (error)
    return (
      <h3 className="h-[85vh] flex flex-col items-center justify-center font-semibold text-2xl text-red-500">
        {error}
      </h3>
    );

  return (
    <div className="max-w-7xl xl:mx-auto mx-4 pt-8 pb-20">
      <div className="flex items-center justify-between mb-10 mt-5">
        <h3 className="text-2xl sm:text-3xl md:text-4xl dark:text-in-dark font-bold font-josep">
          Properties
        </h3>

        <label
          htmlFor="my-drawer-4"
          className="drawer-button cursor-pointer font-semibold  flex items-center gap-2 dark:bg-primary-light bg-stone-200 dark:text-in-dark rounded-lg px-6  py-2 md:hidden "
        >
          <IoFilter />
          <span> Filter</span>
        </label>
      </div>
      <div className="drawer z-30 md:hidden overflow-hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <form className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}

          <div className="menu w-[230px] z-50  sm:w-[300px]   gap-9 min-h-full bg-white  flex flex-col shadow-sm rounded-md  text-base-content">
            <PropertyFilter
              checkboxes={checkboxes}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              setBathrooms={setBathrooms}
              setBedrooms={setBedrooms}
              typeCheckboxes={typeCheckboxes}
              searchText={searchText}
              setSearchText={setSearchText}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              handleCheckboxChange={handleCheckboxChange}
              handleTypeCheckboxChange={handleTypeCheckboxChange}
            />
          </div>

          <button type="submit">Apply Filters</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative items-start">
        {/* Property Filter Component */}
        <div className="md:col-span-5 lg:col-span-4 md:inline hidden sticky top-0">
          <PropertyFilter
            checkboxes={checkboxes}
            typeCheckboxes={typeCheckboxes}
            searchText={searchText}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            setBedrooms={setBedrooms}
            setSearchText={setSearchText}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleCheckboxChange={handleCheckboxChange}
            handleTypeCheckboxChange={handleTypeCheckboxChange}
          />
        </div>

        {isPending ? (
          <div className="col-span-7 lg:col-span-8 sm:w-[70%] mx-auto md:w-full">
            {/* Show skeletons based on the number of data items */}
            <div
              className={`grid ${
                isGrid ? 'grid-cols-1' : 'grid-cols-2 '
              } gap-4`}
            >
              {Array.from(
                { length: propertiesData?.data?.properties?.length || 6 },
                (_, index) => (
                  <div key={index}>
                    {isGrid ? (
                      // skeleton used in list
                      <div className="px-4 py-5 rounded-lg shadow-lg drop-shadow-lg bg-white dark:bg-card-dark grid lg:grid-cols-2 grid-cols-1 my-6">
                        <div className="w-full flex items-center justify-center">
                          {/* Swiper Skeleton */}
                          <div className="w-11/12 mx-auto h-52 bg-gray-300 rounded-lg">
                            {/* Placeholder for Swiper Image */}
                          </div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <Link to="/">
                            {/* Property Title Skeleton */}
                            <h3 className="font-bold my-2 underline text-left bg-gray-300 h-8 w-3/4"></h3>
                          </Link>
                          <div className="text-left">
                            {/* Location Skeleton */}
                            <h3 className="bg-gray-300 h-4 w-1/2 mb-2"></h3>
                            <div className="flex items-start">
                              {/* Bedroom Skeleton */}
                              <h3 className="flex items-center justify-center gap-3 bg-gray-300 h-4 w-1/4"></h3>
                              {/* Bathroom Skeleton */}
                              <h3 className="flex items-center justify-center gap-3 pl-2 bg-gray-300 h-4 w-1/4"></h3>
                              {/* Square Footage Skeleton */}
                              <h3 className="flex items-center justify-center gap-3 pl-2 bg-gray-300 h-4 w-1/4"></h3>
                            </div>
                            {/* Horizontal Rule */}
                            <hr className="mt-7 mb-3" />
                            <div className="flex items-center justify-between">
                              {/* Property Status Skeleton */}
                              <h3 className="bg-gray-300 h-4 w-1/4"></h3>
                              {/* Action Buttons Skeleton */}
                              <div className="flex justify-center items-center gap-4">
                                {/* Link Skeleton */}
                                <div className="bg-gray-300 h-6 w-6"></div>
                                {/* Icon Skeleton */}
                                <div className="bg-gray-300 h-6 w-6"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // skeleton used in grid
                      <div className="px-4 w-[300px] lg:w-full mx-auto py-5 rounded-lg drop-shadow-lg bg-white dark:bg-card-dark animate-pulse">
                        <div className="w-full">
                          {/* Skeleton loader for slider */}
                          <div className="h-56 w-full bg-gray-300 rounded-lg relative"></div>
                        </div>

                        <div className="mt-4">
                          {/* Skeleton loader for property title */}
                          <div className="h-4 w-2/3 bg-gray-300 mb-2"></div>

                          {/* Skeleton loader for location */}
                          <div className="h-4 w-1/2 bg-gray-300"></div>

                          {/* Skeleton loaders for bedroom, bathroom, square footage */}
                          <div className="flex justify-between items-center mt-3 gap-5">
                            <div className="flex items-center gap-2">
                              <div className="h-4 w-4 bg-gray-300"></div>
                              <div className="text-sm text-gray-300"> Bed</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-4 w-4 bg-gray-300"></div>
                              <div className="text-sm text-gray-300"> Bath</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-4 w-4 bg-gray-300"></div>
                              <div className="text-sm text-gray-300"> sqFt</div>
                            </div>
                          </div>

                          {/* Skeleton loader for horizontal rule */}
                          <hr className="my-3" />

                          {/* Skeleton loaders for property status and action buttons */}
                          <div className="flex items-center justify-between">
                            <div className="h-4 w-1/3 bg-gray-300"></div>

                            <div className="flex justify-center items-center gap-4">
                              <div className="h-6 w-6 bg-gray-300"></div>
                              <div className="h-6 w-6 bg-gray-300"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-16">
            {propertiesData?.data?.totalProperty === 0 ? (
              <NoItems />
            ) : (
              <>
                {' '}
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-xl font-semibold"></h4>
                    {!isGrid ? (
                      <button
                        onClick={() => setIsGrid(true)}
                        className="text-primary-light font-semibold mb-5"
                      >
                        List view
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsGrid(false)}
                        className="text-primary-light font-semibold"
                      >
                        Grid View
                      </button>
                    )}
                  </div>

                  {!isGrid ? (
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 -z-30">
                      {propertiesData?.data?.properties?.map((card) => (
                        <PropertiesCard
                          key={card._id}
                          card={card}
                        ></PropertiesCard>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 my-6 -z-30">
                      {propertiesData?.data?.properties?.map((card) => (
                        <PropertiesCardList
                          key={card._id}
                          card={card}
                        ></PropertiesCardList>
                      ))}
                    </div>
                  )}
                </div>
                {totalPage > 1 ? (
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
                            ? 'bg-primary-light hidden md:inline font-semibold text-white px-4 py-2 rounded-full'
                            : 'px-4 py-2 hidden md:inline rounded-full font-semibold bg-white shadow-md'
                        } `}
                        key={pageNo}
                        onClick={() => setActivePage(pageNo)}
                      >
                        {pageNo}
                      </button>
                    ))}
                    <button className="inline md:hidden dark:text-in-dark">
                      <span className="font-bold dark:text-in-dark">
                        {activePage}
                      </span>{' '}
                      of {totalPage}
                    </button>

                    <button
                      className={`${
                        activePage === totalPage
                          ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                          : 'bg-white  p-3 shadow-md rounded-full'
                      }`}
                      onClick={nextPage}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </>
            )}
          </div>
        )}
      </div>

      <TopButton />
    </div>
  );
};

export default Properties;
