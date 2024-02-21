import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
// import Properties from '../Pages/Properties/Properties';
// import PropertiesDetails from '../Components/PropertiesDetails/PropertiesDetails';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import HomeDashboard from '../Pages/Dashboard/HomeDashboard/HomeDashboard';
import AddProperties from '../Pages/AddProperties/AddProperties';
import AllProperties from '../Pages/Dashboard/Moderator/Pages/All Properties/AllProperties';
import BlogPost from '../Features/BlogPost/BlogPost';
import Announcement from '../Pages/Dashboard/Announcement/Announcement';
import Profile from '../Pages/Dashboard/Profile/Profile';
import UserManagement from '../Pages/Dashboard/Admin/Pages/UserManagement';
import PaymentHistory from '../Pages/Dashboard/Member/Pages/Payment History/PaymentHistory';
import StripePayment from '../Components/PaymentMethod/StripePayment/StripePayment';
import FavoriteProperty from '../Components/FavoriteProperty/FavoriteProperty';
import Favourites from '../Pages/Dashboard/User/Pages/Favourites/Favourites';
import PropertyStatus from '../Pages/Dashboard/User/Pages/PropertyStatus/PropertyStatus';
import MakeAnnouncement from '../Pages/Dashboard/Moderator/Pages/MakeAnnouncement/MakeAnnouncement';
import AdminHome from '../Pages/Dashboard/Admin/Pages/AdminHome/AdminHome';
import AllUsers from '../Pages/Dashboard/Admin/Pages/AllUsers/AllUsers';
import PropertyRequest from '../Pages/Dashboard/Moderator/Pages/PropertyRequest/PropertyRequest';
import ManagePropertyRequest from '../Pages/Dashboard/Admin/Pages/ManagePropertyRequest/ManagePropertyRequest';
// import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import ListingSummary from '../Pages/Dashboard/Admin/Pages/Listing Summary/ListingSummary';
import Properties from '../Features/Properties/Properties';
import PropertiesDetails from '../Features/PropertiesDetails/PropertiesDetails';
import LiveChat from '../Features/LiveChat/LiveChat/LiveChat';
import { ThemeProvider } from '../Providers/ThemeContext';
import AudioVideoCall from '../Features/AudioVideoCall/AudioVideoCall';
// import Payment from '../Components/PaymentMethod/Payment';
// import ContactUs from '../Components/Contract/ContactUs/ContactUs';

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
            `https://property-hunter-server-roan.vercel.app/api/v1/properties/${params.id}`
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
        path: '/favorite',
        element: <FavoriteProperty />,
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
      {
        path: '/dashboard/liveChat',
        element: <LiveChat />,
      },
      {
        path: '/dashboard/audioVideoCall',
        element: <AudioVideoCall />,
      },
      //? Member only routes
      {
        path: '/dashboard/payment/:id',
        element: <StripePayment />,
        loader: ({ params }) =>
          fetch(
            `https://property-hunter-server-roan.vercel.app/api/v1/buyer-inquiries/${params.id}`
          ),
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory />,
      },
      {
        path: '/dashboard/property-status',
        element: <PropertyStatus />,
      },
      {
        path: '/dashboard/make-announcement',
        element: <MakeAnnouncement />,
      },
      {
        path: '/dashboard/admin',
        element: <AdminHome />,
      },
      {
        path: '/dashboard/all-users',
        element: <AllUsers />,
      },
      {
        path: '/dashboard/property-request',
        element: <PropertyRequest />,
      },
      {
        path: '/dashboard/manage-property-request',
        element: <ManagePropertyRequest />,
      },
      //? Admin only routes
      {
        path: '/dashboard/listing-summary',
        element: <ListingSummary />,
      },
    ],
  },
]);

export default router;
