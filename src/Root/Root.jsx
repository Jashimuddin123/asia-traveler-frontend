import { Outlet } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";


const Root = () => {
    return (
        <div>
           <Home></Home>
           <Outlet></Outlet>
           
            
        </div>
    );
};

export default Root;