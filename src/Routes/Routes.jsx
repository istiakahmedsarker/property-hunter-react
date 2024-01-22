import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogCard from "../Components/BlogCard/BlogCard";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
// import 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            // {
            //     path: '/properties',
            //     element: <Apartment></Apartment>
            // },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            // {
            //     path: '/signUp',
            //     element: <SignUp></SignUp>
            // }
        ],
    },
]);

export default router