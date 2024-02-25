import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const GetAllAnnouncements = () => {

    const {data: announcement, isLoading, refetch} = useQuery({
        queryKey : ["announcement"],
        queryFn : async () => {
            const {data} = await axios.get('https://property-hunter-server-roan.vercel.app/api/v1/announcement')
            return data.data.announcement;
        }
    })
    return {announcement, isLoading, refetch};
};

export default GetAllAnnouncements;