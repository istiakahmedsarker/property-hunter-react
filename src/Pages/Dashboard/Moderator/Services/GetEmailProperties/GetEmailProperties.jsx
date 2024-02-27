import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../../Hooks/useAuth";
import useAxios from "../../../../../Hooks/useAxios";


const GetEmailProperties = () => {
    const instance = useAxios();
  const { user } = useAuth();
    
  const { data: properties, isLoading, refetch } = useQuery({
    queryKey: ["email-properties"],
    queryFn: async () => {
      const { data } = await instance.get(
        `/properties?email=${user.email}`
      );
      return data.data.properties;
    },
  });
  return { properties, isLoading, refetch };
};

export default GetEmailProperties;