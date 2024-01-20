import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Home',
                element: <Home></Home>
            },
            {
                path: '/Apartment',
                element: <Apartment></Apartment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ],
    },
]);

export default router