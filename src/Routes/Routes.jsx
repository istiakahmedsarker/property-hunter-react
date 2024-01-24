import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
// import BlogCard from "../Components/BlogCard/BlogCard";
import BlogDetails from '../Components/BlogDetails/BlogDetails';
import Properties from '../Pages/Properties/Properties';
import PropertiesDetails from '../Components/PropertiesDetails/PropertiesDetails';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import HomeDashboard from '../Pages/Dashboard/HomeDashboard/HomeDashboard';
import AddProperties from '../Pages/AddProperties/AddProperties';
import BlogPost from '../Components/BlogPost/BlogPost';
// import
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //     path: '/properties',
      //     element: <Apartment></Apartment>
      // },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
        // loader: ({ params }) => {
        //   console.log(params.id);
        //   fetch(`http://localhost:7000/api/v1/blogs/${params.id}`);
        // },
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
    ],
  },
]);

export default router;
