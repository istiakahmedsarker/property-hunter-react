
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar'
import Footer from '../Components/Shared/Footer'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;