import { Outlet } from "react-router-dom";
import SideNav from "../Components/dashboard/SideNav/SideNav";

const Dashboard = () => {
  return (
    <div className="flex gap-6 min-h-screen overflow-y-scroll">
      <div className=" w-1/4  bg-slate-100">
        <SideNav />
      </div>
      <div className=" w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
