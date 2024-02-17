import React from 'react';
import PropertyFilter from '../PropertyFilter/PropertyFilter';

const FilterComponent = ({
    checkboxes,
    typeCheckboxes,
    searchText,
    setSearchText,
    selectedOption,
    setSelectedOption,
    handleCheckboxChange,
    handleTypeCheckboxChange,
}) => (
    <div className="menu w-[230px] z-50 sm:w-[300px] gap-9 min-h-full bg-white flex flex-col shadow-sm rounded-md text-base-content">
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
);

export default React.memo(FilterComponent);