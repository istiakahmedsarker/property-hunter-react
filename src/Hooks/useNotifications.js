import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useNotifications = () => {
    const instance = useAxios();

    const { data: announcement = [], refetch } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const response = await instance.get("/announcement");
            return response?.data?.data?.announcement;
          } 
        },
      );
      const newAnnouncement = [...announcement].sort((a, b) => new Date(b.date) - new Date(a.date));
    return [newAnnouncement, refetch];
};

export default useNotifications;