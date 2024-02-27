import React from 'react';
import useGetData from '../../../../Hooks/useGetData';
import RecommendedCard from './RecommendedCard/RecommendedCard';

const RecommendedProperty = ({ type, id }) => {
  // get single type of property
  const { data: propertiesData } = useGetData({
    key: ['properties', type],
    api: `/properties?propertyType=${type}`,
  });

  const data = propertiesData?.data?.properties || [];

  // filter property
  const filterData = data.filter(item => item._id !== id);
  // slice first four data
  const slicedData = filterData.slice(0, 6);
  return (
    <div className="dark:text-in-dark w-full px-0 pb-5">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold pb-7 py-5">
         Similar {type} type of Properties
        </h3>
      </div>
      {/* show recommended property card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
        {slicedData.map(recommended => (
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
