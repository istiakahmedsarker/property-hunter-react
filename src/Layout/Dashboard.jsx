import { Outlet } from 'react-router-dom';
import SideNav from '../Components/dashboard/SideNav/SideNav';

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="lg:w-[280px] min-h-screen ">
        <SideNav />
      </div>
      <div className="flex-1 px-6 md:mx-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
