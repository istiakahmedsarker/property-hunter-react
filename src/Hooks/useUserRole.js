import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

export default function useUserRole() {
  const axios = useAxios();
  const { user } = useAuth();
  const { isPending, data: role = '' } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      try {
        const res = await axios.get(`/users/email/${user?.email}`);
        return res?.data?.data?.user.role;
      } catch (error) {
        // console.log(error);
      }
    },
  });

  return role;
}
