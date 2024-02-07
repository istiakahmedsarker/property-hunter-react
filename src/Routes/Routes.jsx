import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import BlogCard from '../Components/BlogCard/BlogCard';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Properties from '../Pages/Properties/Properties';
import PropertiesDetails from '../Components/PropertiesDetails/PropertiesDetails';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import HomeDashboard from '../Pages/Dashboard/HomeDashboard/HomeDashboard';
import AddProperties from '../Pages/AddProperties/AddProperties';
import AllProperties from '../Pages/Dashboard/Moderator/Pages/All Properties/AllProperties';
import BlogPost from '../Components/BlogPost/BlogPost';
import Announcement from '../Pages/Dashboard/Announcement/Announcement';
import Profile from '../Pages/Dashboard/Profile/Profile';
import UserManagement from '../Pages/Dashboard/Admin/Pages/UserManagement';
import PaymentHistory from '../Pages/Dashboard/Member/Pages/Payment History/PaymentHistory';
import StripePayment from '../Components/PaymentMethod/StripePayment/StripePayment';
import Payment from '../Components/PaymentMethod/Payment';
import ContactUs from '../Components/Contract/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
      },

      {
        path: '/properties',
        element: <Properties></Properties>,
      },
      { path: '/createBlog', element: <BlogPost /> },
      {
        path: '/propertiesDetails/:id',
        element: <PropertiesDetails></PropertiesDetails>,
        loader: ({ params }) =>
          fetch(
            `https://property-hunter-server.vercel.app/api/v1/properties/${params.id}`
          ),
      },
      {
        path: '/addProperties',
        element: <AddProperties />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/payment',
        element: <StripePayment/>
      },
    ],
  },
  {
    // dashboard routes
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/home',
        element: <HomeDashboard />,
      },
      {
        path: '/dashboard/announcement',
        element: <Announcement />,
      },
      {
        path: '/dashboard/all-properties',
        element: <AllProperties />,
      },
      {
        path: '/dashboard/userManagement',
        element: <UserManagement />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      //? Member only routes
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
