import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const GetAllProperties = () => {

    const {data : properties, isLoading, refetch} = useQuery({
        queryKey : ['all-properties'],
        queryFn : async () => {
            const { data } = await axios.get('https://property-hunter-server.vercel.app/api/v1/properties')
            return data.data.properties;
        }
    })
    return {properties, isLoading, refetch}
};

export default GetAllProperties;