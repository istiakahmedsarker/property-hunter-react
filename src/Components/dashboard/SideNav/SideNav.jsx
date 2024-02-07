import { NavLink } from 'react-router-dom';
import { GrAnnounce } from 'react-icons/gr';
<<<<<<< HEAD
import { MdSpaceDashboard } from 'react-icons/md';
import { FaUser, FaUsersCog, FaHeart } from 'react-icons/fa';
=======
import { MdList, MdSpaceDashboard } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
>>>>>>> 80981b6e77da907d336af4e9da9f6f6d5e69fcb8
import { FaUserGroup } from 'react-icons/fa6';
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
    <div className="pt-20 px-4">
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
            <MdList/>
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
  );
};

export default SideNav;
