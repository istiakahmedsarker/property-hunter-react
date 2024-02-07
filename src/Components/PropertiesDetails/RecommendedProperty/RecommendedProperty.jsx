import React from 'react';
import useGetData from '../../../Hooks/useGetData';
import PropertiesCard from '../../PropertiesCard/PropertiesCard';
import RecommendedCard from './RecommendedCard/RecommendedCard';

const RecommendedProperty = ({ cardDetails }) => {
  const type = cardDetails?.data?.property?.propertyType || '';
  const id = cardDetails?.data?.property?._id || '';
  // get single type of property
  const { data: propertiesData, isPending } = useGetData({
    key: ['properties', type],
    api: `/properties?propertyType=${type}`,
  });

  const data = propertiesData?.properties || [];
  // filter property
  const filterData = data.filter(item => item._id !== id);
  console.log(filterData);
  return (
    <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
      <div>
        <h3 className="text-xl font-semibold py-5">
          See More {type.toUpperCase()} type of Property
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {filterData.map(recommended => (
          <RecommendedCard
            key={recommended._id}
            recommended={recommended}
          ></RecommendedCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProperty;
