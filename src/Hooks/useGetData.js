import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from './useAxios';

const useGetData = ({ key, api }) => {
  const [error, setError] = useState(null);

  const axios = useAxios();
  const { isPending, data = [], refetch } = useQuery({
    queryKey: [...key],
    queryFn: async () => {
      try {
        const res = await axios.get(api);
        return res?.data;
      } catch (error) {
        // console.log(error);
        setError(error.message);
      }
    },
  });
  return { data, error, refetch, isPending };
};

export default useGetData;
