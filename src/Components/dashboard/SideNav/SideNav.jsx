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
import { BsBuildingsFill } from 'react-icons/bs';
import { IoHomeSharp, IoStatsChart } from 'react-icons/io5';
import useUserRole from '../../../Hooks/useUserRole';
const SideNav = () => {
  const userRole = useUserRole();

  console.log(userRole);
  return (
    <div className="drawer lg:drawer-open sticky top-0 bottom-0 z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-screen w-max bg-stone-500  flex flex-col items-start justify-start">
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

        <div className="menu w-[210px] z-50 sm:w-[250px] md:w-[280px]   gap-6 min-h-full  bg-stone-500 text-base-content">
          <ul className="flex flex-col gap-2">
            {userRole === 'member' ? (
              <NavLink
                to={'/dashboard/payment-history'}
                className={({ isActive }) =>
                  isActive
                    ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                    : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                      ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                      : 'py-2 bg-white px-2 rounded-md'
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
                  ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                  : 'py-2 bg-white px-2 rounded-md'
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
                  ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                  : 'py-2 bg-white px-2 rounded-md'
              }
            >
              <div className="flex items-center gap-2">
                <GrAnnounce />
                Announcement
              </div>
            </NavLink>

            <NavLink
              to={'/dashboard/favourites'}
              className={({ isActive }) =>
                isActive
                  ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                  : 'py-2 bg-white px-2 rounded-md'
              }
            >
              <div className="flex items-center gap-2">
                <FaHeart />
                Favourites
              </div>
            </NavLink>
            <NavLink
              to={'/dashboard/property-status'}
              className={({ isActive }) =>
                isActive
                  ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                  : 'py-2 bg-white px-2 rounded-md'
              }
            >
              <div className="flex items-center gap-2">
                <IoStatsChart />
                Property Status
              </div>
            </NavLink>

            <NavLink
              to={'/dashboard/profile'}
              className={({ isActive }) =>
                isActive
                  ? 'py-2 bg-[#eb6753] text-white px-2 rounded-md'
                  : 'py-2 bg-white px-2 rounded-md'
              }
            >
              <div className="flex items-center gap-2">
                <FaUser />
                Profile
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
