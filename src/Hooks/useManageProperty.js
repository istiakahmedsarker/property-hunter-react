import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useManageProperty = () => {
    const instance = useAxios();

    const { data: manageProperty = [], refetch } = useQuery({
        queryKey: ['manageProperty'],
        queryFn: async () => {
            const response = await instance.get('/buyer-inquiries');
            return response?.data?.data?.inquiries;
          } 
        },
      );
    return [manageProperty, refetch];
};

export default useManageProperty;