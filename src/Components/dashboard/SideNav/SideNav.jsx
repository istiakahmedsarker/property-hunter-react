import { NavLink } from 'react-router-dom';
import { GrAnnounce } from 'react-icons/gr';
import { MdList, MdSpaceDashboard } from 'react-icons/md';
import { FaUser, FaUsersCog, FaHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  FaFileInvoiceDollar,
  FaBuildingCircleCheck,
  FaUsers,
} from 'react-icons/fa6';
import { TfiAnnouncement } from 'react-icons/tfi';
import { BsBuildingsFill, BsChatRightFill } from 'react-icons/bs';
import { IoHomeSharp, IoStatsChart } from 'react-icons/io5';
import useUserRole from '../../../Hooks/useUserRole';
import { BsChatRight } from 'react-icons/bs';
import useTheme from '../../../Providers/ThemeContext';

const SideNav = () => {
  const userRole = useUserRole();
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleToggle = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  // console.log(userRole);
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-screen w-max dark:bg-[#021d2e] bg-[#076aa5] flex flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" border-b-2 border-stone-100 text-stone-100 p-4 drawer-button lg:hidden"
        >
          <GiHamburgerMenu size={20} />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className=" w-[210px]  sm:w-[250px] md:w-[280px]  gap-6 min-h-full dark:bg-[#01111b] bg-[#e5ebee] text-base-content relative">
          <h3 className="font-bold text-2xl py-4 pl-6 border-b-2 dark:text-cyan-50 border-stone-300">
            Dashboard
          </h3>
          <div className="flex flex-col  divide-stone-300 font-semibold">
            {userRole === 'member' ? (
              <NavLink
                to={'/dashboard/payment-history'}
                className={({ isActive }) =>
                  isActive
                    ? 'py-[14px]  px-6 bg-[#076aa5] border-r-4  text-white  '
                    : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                }
              >
                <div className="flex items-center gap-2">
                  <FaFileInvoiceDollar />
                  Payment History
                </div>
              </NavLink>
            ) : (
              ''
            )}
            {userRole === 'moderator' ? (
              <>
                <NavLink
                  to={'/dashboard/property-request'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <BsBuildingsFill />
                    Property Request
                  </div>
                </NavLink>

                <NavLink
                  to={'/dashboard/make-announcement'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <TfiAnnouncement />
                    Make announcement
                  </div>
                </NavLink>
              </>
            ) : (
              ''
            )}
            {userRole === 'admin' ? (
              <>
                <NavLink
                  to={'/dashboard/all-properties'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5]  text-white px-6'
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <MdSpaceDashboard />
                    Dashboard
                  </div>
                </NavLink>
                <NavLink
                  to={'/dashboard/admin'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5]  text-white px-6'
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <IoHomeSharp />
                    Admin home
                  </div>
                </NavLink>
                <NavLink
                  to={'/dashboard/manage-property-request'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5]  text-white px-6 '
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaBuildingCircleCheck />
                    Manage Property request
                  </div>
                </NavLink>{' '}
                <NavLink
                  to={'/dashboard/userManagement'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5]  text-white px-6'
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaUsersCog />
                    User Management
                  </div>
                </NavLink>
                <NavLink
                  to={'/dashboard/all-users'}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                      : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaUsers />
                    All users
                  </div>
                </NavLink>
              </>
            ) : (
              ''
            )}

            <NavLink
              to={'/dashboard/listing-summary'}
              className={({ isActive }) =>
                isActive
                  ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                  : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
              }
            >
              <div className="flex items-center gap-2">
                <MdList />
                Listing Summary
              </div>
            </NavLink>

            <NavLink
              to={'/dashboard/announcement'}
              className={({ isActive }) =>
                isActive
                  ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                  : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
              }
            >
              <div className="flex items-center gap-2">
                <GrAnnounce />
                Announcement
              </div>
            </NavLink>
            <NavLink
              to={'/dashboard/property-status'}
              className={({ isActive }) =>
                isActive
                  ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                  : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
              }
            >
              <div className="flex items-center gap-2">
                <IoStatsChart />
                Property Status
              </div>
            </NavLink>

            <NavLink
              to={'/dashboard/liveChat'}
              className={({ isActive }) =>
                isActive
                  ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                  : 'py-[14px]  px-6   dark:text-[#e4e6cd]'
              }
            >
              <div className="flex items-center gap-2">
                {/* <BsChatRight /> this is for dark mode */}
                <BsChatRightFill />
                Live Chat
              </div>
            </NavLink>
            <NavLink
              to={'/dashboard/profile'}
              className={({ isActive }) =>
                isActive
                  ? 'py-[14px]  bg-[#076aa5] text-white px-6 '
                  : 'py-[14px]  px-6    dark:text-[#e4e6cd]'
              }
            >
              <div className="flex items-center gap-2">
                <FaUser />
                Profile
              </div>
            </NavLink>
          </div>

          <div className="absolute top-6 right-7">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={themeMode === 'dark'}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-5 h-5 dark:text-in-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-5 h-5 dark:text-in-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
