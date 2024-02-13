// import { useState } from 'react';
// import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
// import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
// import { FiSearch } from 'react-icons/fi';
// import useGetData from '../../Hooks/useGetData';
// import './Properties.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
// import TopButton from '../../Components/Shared/TopButton/TopButton';
// import useDebounce from '../../Hooks/useDebounce';
// // for explore property

// const Properties = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [activePage, setActivePage] = useState(1);
//   const [searchText, setSearchText] = useState('');
//   const [isGrid, setIsGrid] = useState(false);
//   const debouncedSearchValue = useDebounce(searchText, 800);

//   // for explore type

//   const limit = 6;
//   const [checkboxes, setCheckboxes] = useState({
//     all: true,
//     rent: false,
//     sale: false,
//   });

//   const [typeCheckboxes, setTypeCheckboxes] = useState({
//     all: true,
//     apartment: false,
//     office: false,
//     villa: false,
//   });

//   const handleCheckboxChange = (checkboxName) => {
//     const updatedCheckboxes = {};

//     for (let key in checkboxes) {
//       updatedCheckboxes[key] = key === checkboxName;
//     }

//     setCheckboxes(updatedCheckboxes);
//     setActivePage(1);
//   };

//   const handleTypeCheckboxChange = (checkboxName) => {
//     const updatedCheckboxes = {};

//     for (let key in typeCheckboxes) {
//       updatedCheckboxes[key] = key === checkboxName;
//     }

//     setTypeCheckboxes(updatedCheckboxes);
//     setActivePage(1);
//   };

// const checkedItem = Object.keys(checkboxes).find(
//   (checkbox) => checkboxes[checkbox]
// );

// const typeCheckedItem = Object.keys(typeCheckboxes).find(
//   (checkbox) => typeCheckboxes[checkbox]
// );
//   // for explore Type

//   const { data: propertiesData, isPending } = useGetData({
//     key: [
//       'properties',
//       checkedItem,
//       typeCheckedItem,
//       selectedOption,
//       limit,
//       activePage,
//       debouncedSearchValue,
//     ],
//     api: `/properties?propertyStatus=${
//       checkedItem === 'all' ? '' : checkedItem
//     }&propertyType=${
//       typeCheckedItem === 'all' ? '' : typeCheckedItem
//     }&sort=${selectedOption}&page=${activePage}&limit=${limit}&title=${searchText}`,
//   });

//   // for implement pagination
// const totalPage = Math.ceil(
//   parseInt(propertiesData?.data?.totalProperty) / limit
// );

// let pages = [];
// const totalPageCalc = () => {
//   for (let x = 1; x <= totalPage; x++) {
//     pages.push(x);
//   }
// };
// totalPageCalc();

//   const previousPage = () => {
//     if (activePage === 1) return activePage;
//     setActivePage(activePage - 1);
//   };

//   const nextPage = () => {
//     if (activePage === totalPage) return activePage;
//     setActivePage(activePage + 1);
//   };

//   if (isPending) {
//     return (
//       <p className="h-[90vh] flex flex-col items-center justify-center text-center">
//         Loading...
//       </p>
//     );
//   }
//   return (
//     <div className="max-w-7xl xl:mx-auto mx-4 pt-8 pb-20 ">
//       <div className="my-6">
// <h3 className="text-3xl font-semibold">Properties For sale</h3>
// <div className="drawer drawer-end z-30">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Page content here */}
//     <label
//       htmlFor="my-drawer-4"
//       className="drawer-button btn btn-primary"
//     >
//       Open drawer
//     </label>
//   </div>
//   <div className="drawer-side">
//     <label
//       htmlFor="my-drawer-4"
//       aria-label="close sidebar"
//       className="drawer-overlay"
//     ></label>
//     <div className="menu w-[230px] z-50  sm:w-[300px]   gap-9 min-h-full bg-white flex flex-col shadow-sm rounded-md p-8   text-base-content">
//       <h3 className=" text-[#041e42] font-semibold ">Find your home</h3>
//       <div className="relative -mt-5">
//         <input
//           className="border-2  w-full pl-12 pr-5 py-3 text-lg text-stone-700  rounded-md"
//           type="text"
//           value={searchText}
//           placeholder="Search here"
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4" />
//       </div>

//       <select
//         className="border-[2px] border-stone-200 px-4 py-3 rounded-md w-full text- font-medium text-stone-400"
//         value={selectedOption}
//         onChange={(e) => setSelectedOption(e.target.value)}
//       >
//         <option value="-price">High to Low</option>
//         <option value="price">Low to High</option>
//       </select>

//       <div className="flex flex-col gap-3">
//         <h3 className=" text-[#041e42] font-semibold -mt-2">
//           Listing Status
//         </h3>
//         <div className="flex flex-col space-y-2">
//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={checkboxes.all}
//               onChange={() => handleCheckboxChange('all')}
//             />
//             <label>All</label>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={checkboxes.rent}
//               onChange={() => handleCheckboxChange('rent')}
//             />
//             <label>Rent</label>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={checkboxes.sale}
//               onChange={() => handleCheckboxChange('sale')}
//             />
//             <label>Sale</label>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-3">
//         <h3 className="font-semibold">Property Type</h3>
//         <div className="flex flex-col space-y-2">
//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={typeCheckboxes.all}
//               onChange={() => handleTypeCheckboxChange('all')}
//             />
//             <label>All</label>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={typeCheckboxes.apartment}
//               onChange={() => handleTypeCheckboxChange('apartment')}
//             />
//             <label>Apartment</label>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={typeCheckboxes.office}
//               onChange={() => handleTypeCheckboxChange('office')}
//             />
//             <label>Office</label>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={typeCheckboxes.villa}
//               onChange={() => handleTypeCheckboxChange('villa')}
//             />
//             <label>Villa</label>
//           </div>
//         </div>
//       </div>
//       {/* Sidebar content here */}
//     </div>
//   </div>
// </div>
// <button>sadsa</button>
//       </div>
//       <div className="grid grid-cols-12 gap-6 ">
//         <div className="col-span-5 lg:col-span-4">
//           {/* search field filtering */}
//           <div className="bg-white flex flex-col gap-9 shadow-sm rounded-md p-8 w-full ">
//             <h3 className=" text-[#041e42] font-semibold ">Find your home</h3>
//             <div className="relative -mt-5">
//               <input
//                 className="border-2  w-full pl-12 pr-5 py-3 text-lg text-stone-700  rounded-md"
//                 type="text"
//                 value={searchText}
//                 placeholder="Search here"
//                 onChange={(e) => setSearchText(e.target.value)}
//               />
//               <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4" />
//             </div>

//             <select
//               className="border-[2px] border-stone-200 px-4 py-3 rounded-md w-full text- font-medium text-stone-400"
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//             >
//               <option value="-price">High to Low</option>
//               <option value="price">Low to High</option>
//             </select>

//             <div className="flex flex-col gap-3">
//               <h3 className=" text-[#041e42] font-semibold -mt-2">
//                 Listing Status
//               </h3>
//               <div className="flex flex-col space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={checkboxes.all}
//                     onChange={() => handleCheckboxChange('all')}
//                   />
//                   <label>All</label>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={checkboxes.rent}
//                     onChange={() => handleCheckboxChange('rent')}
//                   />
//                   <label>Rent</label>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={checkboxes.sale}
//                     onChange={() => handleCheckboxChange('sale')}
//                   />
//                   <label>Sale</label>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3">
//               <h3 className="font-semibold">Property Type</h3>
//               <div className="flex flex-col space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={typeCheckboxes.all}
//                     onChange={() => handleTypeCheckboxChange('all')}
//                   />
//                   <label>All</label>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={typeCheckboxes.apartment}
//                     onChange={() => handleTypeCheckboxChange('apartment')}
//                   />
//                   <label>Apartment</label>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={typeCheckboxes.office}
//                     onChange={() => handleTypeCheckboxChange('office')}
//                   />
//                   <label>Office</label>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={typeCheckboxes.villa}
//                     onChange={() => handleTypeCheckboxChange('villa')}
//                   />
//                   <label>Villa</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

// {!propertiesData?.data?.properties?.length ? (
//   <div className="md:col-span-8 sm:w-[70%] mx-auto md:w-full">
//     <p className=" h-[70vh] flex-col flex items-center justify-center">
//       No more items available
//     </p>
//   </div>
// ) : (
//   <div
//     className="col-span-7 lg:col-span-8 flex flex-col gap-16
// "
//   >
//     <div>
//       <div className="flex justify-between">
//         <h4 className="text-xl font-semibold">
//           {/* Show for All Properties :{propertiesCards.length || 0} */}
//         </h4>
//         {/* toggle button for grid and list  */}
//         {!isGrid ? (
//           <button
//             onClick={() => setIsGrid(true)}
//             className="text-[#eb6753] font-semibold"
//           >
//             List view
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsGrid(false)}
//             className="text-[#eb6753] font-semibold"
//           >
//             Grid View
//           </button>
//         )}
//       </div>
//       {/* show card in grid view and list view */}
//       {!isGrid ? (
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 -z-30">
//           {propertiesData?.data?.properties?.map((card) => (
//             <PropertiesCard key={card._id} card={card}></PropertiesCard>
//           ))}
//         </div>
//       ) : (
//         <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5  my-6 -z-30">
//           {propertiesData?.data?.properties?.map((card) => (
//             <PropertiesCardList
//               key={card._id}
//               card={card}
//             ></PropertiesCardList>
//           ))}
//         </div>
//       )}
//     </div>
//     {/* pagination Implementation */}
//     {totalPage > 1 ? (
//       <div className="flex items-center justify-center gap-5">
//         <button
//           className={`${
//             activePage === 1
//               ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
//               : 'bg-white p-3 shadow-md rounded-full'
//           }`}
//           onClick={previousPage}
//         >
//           <FaArrowLeft />
//         </button>

//         {pages.map((pageNo) => (
//           <button
//             className={`${
//               activePage === pageNo
//                 ? 'bg-[#EB6753] hidden md:inline font-semibold text-white px-4 py-2 rounded-full'
//                 : 'px-4 py-2 hidden md:inline rounded-full font-semibold bg-white shadow-md'
//             } `}
//             key={pageNo}
//             onClick={() => setActivePage(pageNo)}
//           >
//             {pageNo}
//           </button>
//         ))}
//         <button className="inline md:hidden">
//           <span className="font-bold">{activePage}</span> of {totalPage}
//         </button>

//         <button
//           className={`${
//             activePage === totalPage
//               ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
//               : 'bg-white p-3 shadow-md rounded-full'
//           }`}
//           onClick={nextPage}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     ) : (
//       ''
//     )}
//   </div>
// )}
// </div>
//       {/* for scroll to top button */}
// <TopButton></TopButton>
//     </div>
//   );
// };
// export default Properties;

import { useState } from 'react';
import PropertiesCard from '../../Components/PropertiesCard/PropertiesCard';
import PropertiesCardList from '../../Components/PropertiesCard/PropertiesCardList';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import TopButton from '../../Components/Shared/TopButton/TopButton';
import useGetData from '../../Hooks/useGetData';
import useDebounce from '../../Hooks/useDebounce';
import PropertyFilter from '../../Components/PropertyFilter/PropertyFilter';
import { IoFilter } from 'react-icons/io5';

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
  const debouncedSearchValue = useDebounce(searchText, 800);
  const limit = 6;

  const checkedItem = Object.keys(checkboxes).find(
    (checkbox) => checkboxes[checkbox]
  );

  const typeCheckedItem = Object.keys(typeCheckboxes).find(
    (checkbox) => typeCheckboxes[checkbox]
  );

  const handleCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {};

    for (let key in checkboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setCheckboxes(updatedCheckboxes);
    setActivePage(1);
  };

  const handleTypeCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {};

    for (let key in typeCheckboxes) {
      updatedCheckboxes[key] = key === checkboxName;
    }

    setTypeCheckboxes(updatedCheckboxes);
    setActivePage(1);
  };

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
    api: `/properties?propertyStatus=${checkedItem === 'all' ? '' : checkedItem
      }&propertyType=${typeCheckedItem === 'all' ? '' : typeCheckedItem
      }&sort=${selectedOption}&page=${activePage}&limit=${limit}&title=${searchText}`,
  });

  // console.log(propertiesData?.data);

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

  if (isPending) {
    return (
      <p className="h-[90vh] flex flex-col items-center justify-center text-center">
        Loading...
      </p>
      // <video src="../../assets/Untitled design.mp4"></video>
    );
  }

  return (
    <div className="max-w-7xl xl:mx-auto mx-4 pt-8 pb-20">
      <div className="flex items-center justify-between mb-10 mt-5">
        <h3 className="text-3xl font-semibold">Properties For sale</h3>
        <button className="flex items-center gap-2 bg-stone-200 rounded-lg px-6  py-2 md:hidden ">
          <IoFilter />
          <label
            htmlFor="my-drawer-4"
            className="drawer-button cursor-pointer font-semibold"
          >
            Filter
          </label>
        </button>
      </div>
      <div className="drawer z-30 md:hidden overflow-hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}

          <div className="menu w-[230px] z-50  sm:w-[300px]   gap-9 min-h-full bg-white flex flex-col shadow-sm rounded-md  text-base-content">
            <PropertyFilter
              checkboxes={checkboxes}
              typeCheckboxes={typeCheckboxes}
              searchText={searchText}
              setSearchText={setSearchText}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              handleCheckboxChange={handleCheckboxChange}
              handleTypeCheckboxChange={handleTypeCheckboxChange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative items-start">
        {/* Property Filter Component */}
        <div className="md:col-span-5 lg:col-span-4 md:inline hidden sticky top-0">
          <PropertyFilter
            checkboxes={checkboxes}
            typeCheckboxes={typeCheckboxes}
            searchText={searchText}
            setSearchText={setSearchText}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleCheckboxChange={handleCheckboxChange}
            handleTypeCheckboxChange={handleTypeCheckboxChange}
          />
        </div>

        {!propertiesData?.data?.properties?.length ? (
          <div className="col-span-7 lg:col-span-8 sm:w-[70%] mx-auto md:w-full">
            <p className=" h-[70vh] flex-col flex items-center justify-center">
              No more items available
            </p>
          </div>
        ) : (
          <div
            className="md:col-span-7 lg:col-span-8 flex flex-col gap-16
        "
          >
            <div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold">
                  {/* Show for All Properties :{propertiesCards.length || 0} */}
                </h4>
                {/* toggle button for grid and list  */}
                {!isGrid ? (
                  <button
                    onClick={() => setIsGrid(true)}
                    className="text-[#eb6753] font-semibold mb-5"
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
              {/* show card in grid view and list view */}
              {!isGrid ? (
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 -z-30">
                  {propertiesData?.data?.properties?.map((card) => (
                    <PropertiesCard key={card._id} card={card}></PropertiesCard>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col  gap-5  my-6 -z-30">
                  {propertiesData?.data?.properties?.map((card) => (
                    <PropertiesCardList
                      key={card._id}
                      card={card}
                    ></PropertiesCardList>
                  ))}
                </div>
              )}
            </div>
            {/* pagination Implementation */}
            {totalPage > 1 ? (
              <div className="flex items-center justify-center gap-5">
                <button
                  className={`${activePage === 1
                      ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                      : 'bg-white p-3 shadow-md rounded-full'
                    }`}
                  onClick={previousPage}
                >
                  <FaArrowLeft />
                </button>

                {pages.map((pageNo) => (
                  <button
                    className={`${activePage === pageNo
                        ? 'bg-[#EB6753] hidden md:inline font-semibold text-white px-4 py-2 rounded-full'
                        : 'px-4 py-2 hidden md:inline rounded-full font-semibold bg-white shadow-md'
                      } `}
                    key={pageNo}
                    onClick={() => setActivePage(pageNo)}
                  >
                    {pageNo}
                  </button>
                ))}
                <button className="inline md:hidden">
                  <span className="font-bold">{activePage}</span> of {totalPage}
                </button>

                <button
                  className={`${activePage === totalPage
                      ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                      : 'bg-white p-3 shadow-md rounded-full'
                    }`}
                  onClick={nextPage}
                >
                  <FaArrowRight />
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        )}
      </div>

      <TopButton />
    </div>
  );
};

export default Properties;
