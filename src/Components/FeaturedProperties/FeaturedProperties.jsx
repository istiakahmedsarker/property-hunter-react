import { useEffect, useState } from 'react';
import PropertiesCard from '../../Features/Properties/Components/PropertiesCard/PropertiesCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../SectionTitle/SectionTitle';

const FeaturedProperties = () => {
  const { isPending, error, featuredPropertiesData } = useQuery({
    queryKey: ['featuredPropertiesData'],
    queryFn: async () => {
      const res = await axios.get(`/featuredPropertiesData`);
      return res?.data?.data?.blog;
    },
  });

  // console.log(featuredPropertiesData)
  return (
    <div>
      <SectionTitle
        title="Featured Property"
        subTitle="Explore the Most Featured Items"
      />
      {/* <PropertiesCard card={featuredPropertiesData}></PropertiesCard> */}
    </div>
  );
};

export default FeaturedProperties;
