import axios from "axios";
import AgentCard from "./AgentCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const Agents = () => {
    // Dummy data, replace this with your actual data
    const axiosInstance = useAxios();

    const { data: agentsData, isLoading, error } = useQuery({
        queryKey: 'getAgentsData',
        queryFn: getAgentsData,
    });

    async function getAgentsData() {
        try {
            const response = await axiosInstance.get('/users/get-agents');
            return response?.data?.data;
        } catch (error) {
            throw new Error('Error fetching agent data');
        }
    }
    return (
        <div>
            <div className="font-[sans-serif] text-[#333]">
                <div className="max-w-5xl mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold">Meet our team</h2>
                        <p className="text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 max-md:justify-center mt-12">
                        {agentsData?.map((agent, index) => (
                            <AgentCard key={index} agents={agent} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;