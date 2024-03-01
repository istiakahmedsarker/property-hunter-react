import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useManageProperty = () => {
  const instance = useAxios();

  const { data: manageProperty = [], refetch } = useQuery({
    queryKey: ["manageProperty"],
    queryFn: async () => {
      const response = await instance.get("/buyer-inquiries");
      const inquiries = response?.data?.data?.inquiries || [];

      const sortedInquiries = inquiries.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      return sortedInquiries;
    },
  });
  return [manageProperty, refetch];
};

export default useManageProperty;
