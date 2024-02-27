import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetAllPayments = () => {
  const { data: payments, isLoading, refetch } = useQuery({
    queryKey: ["all-payments"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://property-hunter-server-roan.vercel.app/api/v1/payments"
      );
      return data.data.payments;
    },
  });
  return { payments, isLoading, refetch };
};

export default GetAllPayments;
