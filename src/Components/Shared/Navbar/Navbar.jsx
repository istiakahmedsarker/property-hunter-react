import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import useAuth from '../../../Hooks/useAuth';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigate('/login');
  };

  const pages = (
    <>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === '/' ? 'text-[#eb6753]' : 'text-gray-700'
          } no-underline`}
          to={'/'}
        >
          Home
        </Link>
      </li>
      <li className="nav-link relative dropdown dropdown-hover">
        <Link
          className={` ${
            pathname === '/properties' ? 'text-[#eb6753]' : 'text-gray-700'
          } no-underline`}
          to={'/properties'}
        >
          Properties
        </Link>
      </li>
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === '/blogs' ? 'text-[#eb6753]' : 'text-gray-700'
          } no-underline`}
          to={'/blogs'}
        >
          Blogs
        </Link>
      </li>
      {user && (
        <li className="nav-link relative">
          <Link
            className={` ${
              pathname === '/dashboard' ? 'text-[#eb6753]' : 'text-gray-700'
            } no-underline`}
            to={'/dashboard'}
          >
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link
          className={` ${
            pathname === '/add-property'
              ? 'text-[#eb6753]'
              : 'inline-block md:hidden text-gray-700'
          } no-underline`}
          to={'/add-property'}
        >
          Add Property
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-gray-50">
      <div className="navbar px-4 md:px-0 max-w-7xl mx-auto py-4  text-gray-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  hover:text-gray-50 hover:bg-[#eb6753] btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="flex flex-col gap-2 menu menu-sm dropdown-content px-5 py-3 mt-3 z-[9999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {pages}
            </ul>
          </div>
          <a className=" text-[18px] md:text-xl flex items-center gap-2">
            <img
              className="hidden md:inline mix-blend h-6 md:h-10 w-6 md:w-10 object-cover"
              src="https://i.ibb.co/CJrmqqw/Screenshot-2024-01-15-161908-removebg-preview.png"
              alt=""
            />

            <h3 className="font-medium">Property-Hunter</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 menu-horizontal px-1">
            {pages}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn mt-2 btn-ghost btn-circle avatar"
              >
                <div className="w-16  flex items-center justify-center border-2 hover:border-gray-800 rounded-full">
                  <img
                    alt="user"
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU'
                    }
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[9999] shadow dropdown-content px-8 py-8 text-xl bg-[#fafdf9] rounded-box w-[250px] max-w-[300px] flex flex-col items-center justify-center gap-2"
              >
                <li className="flex items-center justify-center">
                  <div className="w-20 flex items-center justify-center h-20 border-2 border-[#eb6753] hover:border-gray-800 rounded-full">
                    <img
                      alt="user"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU'
                      }
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </li>
                <li className="w-full">
                  <a className="  mt-4 flex items-center justify- text-lg font-medium">
                    {user?.email}
                  </a>
                </li>
                <div className="h-[1px] bg-gray-400 w-full"></div>
                <li onClick={handleLogOut} className="w-full">
                  <a className=" flex items-center gap-2  w-full text-lg font-medium cursor-pointer">
                    Logout
                    <span className="text-[#eb6753]">
                      <RiLogoutBoxLine />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          )}

          {!user && (
            <Link
              to="/login"
              className="px-7 py-3 lg:px-5 xl:px-7 border-2 border-[#eb6753] md:border-2 md:border-[#eb6753] lg:border-none lg:hover:border-2  lg:hover:border-[#eb6753] rounded-full text-sm md:text-lg lg:text-[16px] xl:text-lg hover:bg-[#eb6753] font-medium  md:bg-none lg:py-2 xl:py-3 text-gray-700 hover:text-gray-100"
            >
              Login/Register
            </Link>
          )}
          <button
            onClick={() => {
              if (!user) {
                return;
              } else {
                navigate('/addProperties');
              }
            }}
            className="px-7 py-3 lg:px-5 xl:px-7 lg:py-2 xl:py-3 hidden md:hidden lg:block rounded-full ml-2 text-lg md:text-lg lg:text-[16px] xl:text-lg font-medium hover:border-[#eb6753] text-gray-700 hover:text-gray-100 border-2 border-gray-700 hover:bg-[#eb6753]"
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
