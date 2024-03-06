import axios from 'axios';
import AgentCard from './AgentCard';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import SectionTitle from '../SectionTitle/SectionTitle';

const Agents = () => {
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
      <div className="font-[sans-serif] text-[#333] max-w-7xl mx-auto my-7 md:my-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle
              title="Our Team"
              subTitle="The Collaborative Force Behind Our Success"
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-28 gap-y-10 max-md:justify-center mt-12 mx-2">
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
