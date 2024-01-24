import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="pt-20 px-4">
      <ul className="flex flex-col gap-2">
        <NavLink
          to={"/dashboard/all-properties"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-slate-400 text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
         All Properties
        </NavLink>
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-slate-400 text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-slate-400 text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? "py-2 bg-slate-400 text-white px-2 rounded-md"
              : "py-2 bg-white px-2 rounded-md"
          }
        >
          Dashboard
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
