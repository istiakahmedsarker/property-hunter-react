import { FiSearch } from 'react-icons/fi';
import './PropertyFilter.css';

const PropertyFilter = ({
  checkboxes,
  typeCheckboxes,
  searchText,
  setSearchText,
  selectedOption,
  setSelectedOption,
  handleCheckboxChange,
  handleTypeCheckboxChange,
}) => {
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

  return (
    <div className="bg-white dark:text-in-dark dark:bg-card-dark flex flex-col gap-9 shadow-sm rounded-md p-3 pt-6 sm:p-5 w-full">
      <h3 className="text-[#041e42] dark:text-in-dark font-semibold">Find your home</h3>
      <div className="relative -mt-5">
        <input
          className="border-2 w-full pl-12 pr-5 py-3 md:text-lg dark:bg-primary-dark text-stone-400 rounded-md"
          type="text"
          value={searchText}
          placeholder="Search here"
          onChange={e => setSearchText(e.target.value)}
        />
        <FiSearch className="absolute text-2xl text-stone-400 left-4 top-4" />
      </div>

      <select
        className="border-[2px] border-stone-200 px-4 py-3 rounded-md w-full font-medium dark:bg-primary-dark text-stone-400"
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        <option value="-price">High to Low</option>
        <option value="price">Low to High</option>
      </select>

      <div className="flex flex-col gap-3">
        <h3 className="text-[#041e42] dark:text-in-dark font-semibold -mt-2">Listing Status</h3>
        <div className="flex flex-col space-y-2">
          {Object.keys(checkboxes).map(checkbox => (
            <div className="flex items-center gap-2" key={checkbox}>
              <input
                type="radio"
                checked={checkboxes[checkbox]}
                onChange={() => handleCheckboxChange(checkbox)}
                className=''
              />
              <label>{checkbox.toUpperCase()}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Property Type</h3>
        <div className="flex flex-col space-y-2">
          {Object.keys(typeCheckboxes).map(checkbox => (
            <div className="flex items-center gap-2" key={checkbox}>
              <input
                type="radio"
                checked={typeCheckboxes[checkbox]}
                onChange={() => handleTypeCheckboxChange(checkbox)}
              />
              <label>{checkbox.toUpperCase()}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
