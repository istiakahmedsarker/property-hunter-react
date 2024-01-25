import { NavLink } from "react-router-dom";
import { GrAnnounce } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const SideNav = () => {
  return (
    <div className="pt-20 px-4">
      <ul className="flex flex-col gap-2">
        <NavLink
          to={"/dashboard/all-properties"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-[#eb6753] text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          <div className="flex items-center gap-2">
            <MdSpaceDashboard />
            Dashboard
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/announcement"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-[#eb6753] text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          <div className="flex items-center gap-2">
            <GrAnnounce />
            Announcement
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-[#eb6753] text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          <div className="flex items-center gap-2">
            <FaUser />
            Profile
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
