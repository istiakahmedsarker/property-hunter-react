import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const usePropertyStatus = () => {
    const instance = useAxios();
    const { user } = useAuth();

    const { data: status = [], refetch } = useQuery({
        queryKey: ['status', user?.email],
        queryFn: async () => {
            const response = await instance.get(`/buyer-inquiries?useremail=${user?.email}`);
            return response?.data?.data?.inquiries;
          } 
        },
      );
    return [status, refetch];
};

export default usePropertyStatus;