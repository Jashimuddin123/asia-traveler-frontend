import { Outlet } from "react-router-dom";
// import Login from "../Components/Login";
// import Register from "../Components/Register";
// import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Footer from "../Fotter/Fotter";
import WhyChose from "../Components/WhyChose";


const Root = () => {
    return (
        <div>
               <div  className="max-w-6xl mx-auto">
               <Navbar></Navbar>
               <Outlet></Outlet>
               </div>
               <WhyChose></WhyChose>
           <Footer></Footer>
            
        </div>
    );
};

export default Root;