import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
// import Properties from '../Pages/Properties/Properties';
// import PropertiesDetails from '../Components/PropertiesDetails/PropertiesDetails';
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import HomeDashboard from "../Pages/Dashboard/HomeDashboard/HomeDashboard";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../Pages/Dashboard/Moderator/Pages/All Properties/AllProperties";
import BlogPost from "../Features/BlogPost/BlogPost";
import Announcement from "../Pages/Dashboard/Announcement/Announcement";
import Profile from "../Pages/Profile/Profile";
import UserManagement from "../Pages/Dashboard/Admin/Pages/UserManagement";
import PaymentHistory from "../Pages/Dashboard/Member/Pages/Payment History/PaymentHistory";
import StripePayment from "../Components/PaymentMethod/StripePayment/StripePayment";
import FavoriteProperty from "../Components/FavoriteProperty/FavoriteProperty";
import PropertyStatus from "../Pages/Dashboard/User/Pages/PropertyStatus/PropertyStatus";
import MakeAnnouncement from "../Pages/Dashboard/Moderator/Pages/MakeAnnouncement/MakeAnnouncement";
import AdminHome from "../Pages/Dashboard/Admin/Pages/AdminHome/AdminHome";
import PropertyRequest from "../Pages/Dashboard/Moderator/Pages/PropertyRequest/PropertyRequest";
import ManagePropertyRequest from "../Pages/Dashboard/Admin/Pages/ManagePropertyRequest/ManagePropertyRequest";
// import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Properties from "../Features/Properties/Properties";
import PropertiesDetails from "../Features/PropertiesDetails/PropertiesDetails";
import LiveChat from "../Features/LiveChat/LiveChat/LiveChat";
import AudioVideoCall from "../Features/AudioVideoCall/AudioVideoCall";
import NotificationDetails from "../Components/Notifications/NotificationDetails/NotificationDetails";
import ModeratorHome from "../Pages/Dashboard/Moderator/Pages/ModeratorHome/ModeratorHome";
import AboutUs from "../Features/AboutUs/AboutUs";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import MemberRoute from './MemberRoute';
import AdminRoute from './AdminRoute';
import PrivateRoute from '../Routes/PrivateRoute'
import EmailSender from '../Components/EmailSender/EmailSender';
import ModeratorRoute from './ModeratorRoute';
// import Payment from '../Components/PaymentMethod/Payment';
// import ContactUs from '../Components/Contract/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
      },

      {
        path: '/properties',
        element: <Properties></Properties>,
      },
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
      {
        path: '/notificationDetails/:id',
        element: <NotificationDetails />,
        loader: ({ params }) =>
          fetch(
            `https://property-hunter-server-roan.vercel.app/api/v1/announcement/${params.id}`
          ),
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    // dashboard routes
    path: '/dashboard',
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        path: '/dashboard/home',
        element: <PrivateRoute>
          <HomeDashboard />
        </PrivateRoute>,
      },
      {
        path: '/dashboard/announcement',
        element: <PrivateRoute>
          <Announcement />
        </PrivateRoute>,
      },
      {
        path: '/dashboard/all-properties',
        element: <AdminRoute>
          <AllProperties />
        </AdminRoute>,
      },
      {
        path: '/dashboard/liveChat',
        element: <PrivateRoute>
          <LiveChat />
        </PrivateRoute>,
      },
      {
        path: '/dashboard/audioVideoCall',
        element: <PrivateRoute>
          <AudioVideoCall />
        </PrivateRoute>,
      },
      //? Member only routes
      {
        path: '/dashboard/payment/:id',
        element: <MemberRoute>
          <StripePayment />
        </MemberRoute>,
        loader: ({ params }) =>
          fetch(
            `https://property-hunter-server-roan.vercel.app/api/v1/buyer-inquiries/${params.id}`
          ),
      },
      {
        path: '/dashboard/payment-history',
        element: <MemberRoute>
          <PaymentHistory />
        </MemberRoute>,
      },
      {
        path: '/dashboard/property-status',
        element: <PrivateRoute>
          <PropertyStatus />
        </PrivateRoute>,
      },
      {
        path: '/dashboard/make-announcement',
        element: <ModeratorRoute>
          <MakeAnnouncement />
        </ModeratorRoute>,
      },
      {
        path: '/dashboard/admin',
        element: <AdminRoute>
          <AdminHome />
        </AdminRoute>,
      },
      {
        path: '/dashboard/all-users',
        element: <AdminRoute>
          <UserManagement />
        </AdminRoute>,
      },
      {
        path: '/dashboard/createBlog',
        element: <ModeratorRoute>
          <BlogPost />
        </ModeratorRoute>,
      },
      {
        path: '/dashboard/property-request',
        element: <ModeratorRoute>
          <PropertyRequest />
        </ModeratorRoute>,
      },
      {
        path: '/dashboard/manage-property-request',
        element: <AdminRoute>
          <ManagePropertyRequest />
        </AdminRoute>,
      },
      //? Admin only routes
      {
        path: "/dashboard/moderator",
        element: <AdminRoute>
          <ModeratorHome />
        </AdminRoute>,
      },
      {
        path: "/dashboard/email-sender",
        element: <EmailSender />,
      },
    ],
  },
]);

export default router;
