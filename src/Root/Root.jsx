import { Outlet } from "react-router-dom";
// import Login from "../Components/Login";
// import Register from "../Components/Register";
// import Home from "../Components/Home";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div>
             <Navbar></Navbar>
           <Outlet></Outlet>
           
            
        </div>
    );
};

export default Root;