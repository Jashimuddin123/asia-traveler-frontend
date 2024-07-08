import { Outlet } from "react-router-dom";
// import Login from "../Components/Login";
// import Register from "../Components/Register";
// import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Footer from "../Fotter/Fotter";


const Root = () => {
    return (
        <div>
             <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Root;