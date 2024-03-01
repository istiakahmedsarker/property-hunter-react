import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const usePropertyReqForMod = () => {
  const instance = useAxios();
  const { user } = useAuth();

  const { data: propertyReqForMod = [], isLoading, refetch } = useQuery({
    queryKey: ["propertyReqForMod"],
    queryFn: async () => {
      const response = await instance.get(
        `/buyer-inquiries?useremail=${user.email}`
      );
      const inquiries = response?.data?.data?.inquiries || [];
      
      const sortedInquiries = inquiries.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return sortedInquiries;
    },
  });
  return [propertyReqForMod, isLoading, refetch];
};

export default usePropertyReqForMod;
