import { useEffect, useState } from 'react';
import PropertiesCard from '../../Features/Properties/Components/PropertiesCard/PropertiesCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const FeaturedProperties = () => {

    const { isPending, error, featuredPropertiesData} = useQuery({
        queryKey: ['featuredPropertiesData'],
        queryFn: async () => {
            const res = await axios.get(`/featuredPropertiesData`);
            return res?.data?.data?.blog;
        },
    });

    // console.log(featuredPropertiesData)
    return (
        <div>
            <h1 className='text-gray-900 text-[28px] md:text-[30px] lg:text-4xl text-center dark:text-in-dark font-bold md:mb-3 lg:mb-4'>Featured Properties</h1>
            {/* <PropertiesCard card={featuredPropertiesData}></PropertiesCard> */}
        </div>
    );
};

export default FeaturedProperties;