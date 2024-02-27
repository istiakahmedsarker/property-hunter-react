import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";

const GetAllProperties = () => {
  const instance = useAxios();
    
  const { data: properties, isLoading, refetch } = useQuery({
    queryKey: ["all-properties"],
    queryFn: async () => {
      const { data } = await instance.get(
        "/properties"
      );
      return data.data.properties;
    },
  });
  return { properties, isLoading, refetch };
};

export default GetAllProperties;
