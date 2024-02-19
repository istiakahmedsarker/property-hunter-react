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
  const slicedData = filterData.slice(0, 4);
  return (
    <div className=" w-full my-6 rounded-lg shadow-lg drop-shadow-lg bg-white px-7 py-6">
      <div>
        <h3 className="text-xl font-semibold py-5">
          See More {type} type of Property
        </h3>
      </div>
      {/* show recommended property card */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
