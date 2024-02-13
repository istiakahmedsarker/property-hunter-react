import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import useAuth from '../../../Hooks/useAuth';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GiSelfLove } from 'react-icons/gi';
import useFavorite from '../../../Hooks/useFavorite';
import { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  // state for theme implement
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );
  //use local host for theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);
  // handle theme toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [favorite] = useFavorite();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleLogOut = () => {
    logOut();
    navigate('/login');
  };


  const pages = (
    <>
      <li className="nav-link relative  ">
        <Link

          className={` ${
            pathname === "/" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#eb6753] lg:hover:bg-none text-gray-800 hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/"}

        >
          Home
        </Link>
      </li>
      <li className="nav-link relative ">
        <Link

          className={` ${
            pathname === "/properties" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#eb6753] lg:hover:bg-none hover:text-white  p-4 lg:p-0 w-full inline-block rounded-[10px]`}
          to={"/properties"}

        >
          Properties
        </Link>
      </li>
      <li className="nav-link relative ">
        <Link

          className={` ${
            pathname === "/blogs" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg hover:bg-[#eb6753] lg:hover:bg-none hover:text-white  p-4 lg:p-0 w-full inline-block rounded-[10px]`}
          to={"/blogs"}

        >
          Blogs
        </Link>
      </li>
      {user && (
        <li className="nav-link relative ">
          <Link

            className={` ${
              pathname === "/dashboard" ? "text-[#eb6753] font-bold" : "text-gray-700"
            } no-underline font-semibold text-lg hover:bg-[#eb6753] lg:hover:bg-none hover:text-white  p-4 lg:p-0 w-full inline-block rounded-[10px]`}
            to={"/dashboard"}
          >
            Dashboard
          </Link>
        </li>
      )}
      <li className='nav-link relative '>
        <Link
          className={` ${
            pathname === '/add-property'
              ? 'text-[#eb6753] font-bold'
              : 'inline-block md:hidden text-gray-700'
          } no-underline font-semibold text-lg hover:bg-[#eb6753] lg:hover:bg-none  p-4 lg:p-0 text-gray-800 hover:text-white w-full inline-block rounded-[10px]`}
          to={'/addProperties'}

        >
          Add Property
        </Link>
      </li>
      {/* favorite Property route */}
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === '/favorite' ? 'text-[#eb6753] font-bold' : 'text-gray-700'
          } no-underline font-semibold text-lg`}
          to={'/favorite'}
        >
          <h3 className='flex items-center gap-1'><GiSelfLove /> <span className='bg-[#eb6753] text-white px-2 text-sm rounded-full'>+{favorite?.data?.length}</span></h3>
        </Link>
      </li>
    </>
  );

  const pages2 = (
    <>
      <li className="nav-link relative  ">
        <Link

          className={` ${
            pathname === "/" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg`}
          to={"/"}

        >
          Home
        </Link>
      </li>
      <li className="nav-link relative">
        <Link

          className={` ${
            pathname === "/properties" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg`}
          to={"/properties"}

        >
          Properties
        </Link>
      </li>
      <li className="nav-link relative ">
        <Link

          className={` ${
            pathname === "/blogs" ? "text-[#eb6753] font-bold" : "text-gray-700"
          } no-underline font-semibold text-lg`}
          to={"/blogs"}

        >
          Blogs
        </Link>
      </li>
      {user && (
        <li className="nav-link relative ">
          <Link

            className={` ${
              pathname === "/dashboard" ? "text-[#eb6753] font-bold" : "text-gray-700"
            } no-underline font-semibold text-lg`}
            to={"/dashboard"}
          >
            Dashboard
          </Link>
        </li>
      )}
      <li className='nav-link relative '>
        <Link
          className={` ${
            pathname === '/add-property'
              ? 'text-[#eb6753] font-bold'
              : 'inline-block md:hidden text-gray-700'
          } no-underline font-semibold text-lg`}
          to={'/addProperties'}

        >
          Add Property
        </Link>
      </li>
      {/* favorite Property route */}
      <li className="nav-link relative">
        <Link
          className={` ${
            pathname === '/favorite' ? 'text-[#eb6753] font-bold' : 'text-gray-700'
          } no-underline font-semibold text-lg`}
          to={'/favorite'}
        >
          <h3 className='flex items-center gap-1'><GiSelfLove /> <span className='bg-[#eb6753] text-white px-2 text-sm rounded-full'>+{favorite?.data?.length}</span></h3>
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-[#ebebeb]">
      <div className="navbar px-4 md:px-4 max-w-7xl mx-auto py-6  text-gray-700">
        <div className="navbar-start">
          <div onClick={(e) => {
            e.stopPropagation();
            setIsShowMenu(!isShowMenu);
            console.log(isShowMenu);
          }} className="dropdown">
            <div 
              // tabIndex={0}
              role="button"
              className="btn text-2xl font-bold btn-ghost lg:hidden"
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
              // tabIndex={0}
              className={`${isShowMenu === true ? 'flex' : ''} ${isShowMenu === true ? "translate-x-0 translate-y-0" : "translate-x-[-200%] translate-y-[-200%]"} flex-col gap-2  absolute p-5 mt-3 transition-all duration-1000 z-[9999] ${isShowMenu === true ? "h-[100vh]" : "h-0"}  shadow bg-base-100 rounded-box w-[80vw] md:w-[40vw]`}
            >
               <div className='fixed -top-4 -right-4
                z-10 h-10 w-10 bg-white rounded-full flex items-center justify-center'><p className=' text-2xl font-bold'><RxCross1/></p></div>
              {pages}
            </ul>
          </div>
          <a className=" text-[18px] md:text-xl flex items-center gap-2">
            <img
              className="hidden md:inline mix-blend h-6 md:h-10 w-6 md:w-10 object-cover"
              src="https://i.ibb.co/CJrmqqw/Screenshot-2024-01-15-161908-removebg-preview.png"
              alt=""
            />

            <h3 className=" font-semibold md:font-medium text-[18px] md:text-xl text-gray-900">
              Property-Hunter
            </h3>
          </a>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 menu-horizontal px-1">
           
            {pages2}
          </ul>
        </div>
        <div className="navbar-end">
          {/* for dark and white theme */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === 'light' ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
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
              className="px-7 py-3 lg:px-5 xl:px-7 border-2 border-[#eb6753] md:border-2 md:border-[#eb6753] lg:border-none lg:hover:border-2  lg:hover:border-[#eb6753] rounded-md text-sm md:text-lg lg:text-[16px] xl:text-lg hover:bg-[#eb6753] md:hover:bg-[#091538] font-medium  md:bg-none lg:py-2 xl:py-3 text-gray-700 hover:text-gray-100"
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
            className="px-7 py-3 lg:px-5 xl:px-7 lg:py-2 xl:py-3 hidden md:hidden lg:block rounded-md ml-2 text-lg md:text-lg lg:text-[16px] xl:text-lg font-medium hover:border-[#eb6753] hover:text-gray-100 border-2 border-gray-700 bg-[#eb6753] border-none text-white hover:bg-[#e67f6f]"
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
