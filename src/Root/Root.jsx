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
              <Navbar></Navbar>
               <div  className="max-w-6xl mx-auto">
             
               <Outlet></Outlet>
               </div>
               <WhyChose></WhyChose>
           <Footer></Footer>
            
        </div>
    );
};

export default Root;