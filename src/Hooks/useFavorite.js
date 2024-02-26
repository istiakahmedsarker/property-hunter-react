import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useFavorite = () => {
  const instance = useAxios();
  const { user } = useAuth();

  const { data: favorite = [], refetch } = useQuery({
    queryKey: ['favorite', user?.email],
    queryFn: async () => {
      try {
        const response = await instance.get(
          `/property-favorite?usermail=${user?.email}`
        );
        return response.data;
      } catch (error) {
        console.error('Error fetching favorite properties:', error);
      }
    },
  });
  // console.log(favorite);

  return [favorite, refetch];
};

export default useFavorite;
