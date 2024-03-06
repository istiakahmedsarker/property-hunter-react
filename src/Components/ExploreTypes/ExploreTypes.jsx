import { MdApartment, MdOutlineHome } from 'react-icons/md';
import { GiVillage } from 'react-icons/gi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

const ExploreTypes = () => {
  const handleTypeClick = (propertyType) => {
    history.push(`/properties?propertyType=${propertyType}`);
  };

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto my-20 dark:bg-primary-dark ">
      <div className="my-6 text-center">
        <SectionTitle
          title="Properties"
          subTitle="Exploring All Types of Properties"
        />
      </div>

      {/* for redirect the relevant property */}
      <div className="w-full grid lg:grid-cols-4 gap-x-6 gap-y-6 sm:gap-y-10 xs:grid-cols-2 grid-cols-1 ">
        <Link
          to="/properties?propertyType=house"
          onClick={() => handleTypeClick('house')}
        >
          <div className="dark:bg-card-dark dark:text-gray-400 dark:hover:text-in-dark px-6 py-7 mx-auto bg-gray-100 rounded-2xl hover:bg-primary-light transition-all duration-500 ease-in-out hover:text-white shadow-lg">
            <div className="flex justify-center items-center ">
              <h3 className="text-3xl w-16 h-16 px-3 py-3 rounded-full text-black bg-white flex justify-center items-center">
                <MdOutlineHome />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold ">House</h3>
              <h3 className="">8 Properties</h3>
            </div>
          </div>
        </Link>
        <Link
          to="/properties?propertyType=apartment"
          onClick={() => handleTypeClick('apartment')}
        >
          <div className="dark:bg-card-dark dark:text-gray-400 dark:hover:text-in-dark px-6 py-7  mx-auto bg-gray-100 rounded-2xl hover:bg-primary-light transition-all duration-500 ease-in-out hover:text-white shadow-lg">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <MdApartment />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Apartment</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>

        <Link
          to="/properties?propertyType=villa"
          onClick={() => handleTypeClick('villa')}
        >
          <div className="dark:bg-card-dark dark:text-gray-400 dark:hover:text-in-dark px-6 py-7  mx-auto bg-gray-100 rounded-2xl hover:bg-primary-light transition-all duration-500 ease-in-out hover:text-white shadow-lg">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black   bg-white flex justify-center items-center">
                <GiVillage />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Villa</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>

        <Link
          to="/properties?propertyType=office"
          onClick={() => handleTypeClick('office')}
        >
          <div className="dark:bg-card-dark dark:text-gray-400 dark:hover:text-in-dark px-6 py-7  mx-auto bg-gray-100 rounded-2xl hover:bg-primary-light transition-all duration-500 ease-in-out hover:text-white shadow-lg">
            <div className="flex justify-center items-center">
              <h3 className=" text-3xl w-16 h-16  px-3 py-3 rounded-full text-black  bg-white flex justify-center items-center">
                <HiOutlineBuildingOffice2 />
              </h3>
            </div>
            <div className="my-7 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">Office</h3>
              <h3>{}8 Properties</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreTypes;
