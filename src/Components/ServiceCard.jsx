// src/App.js

import { MdFlight } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";


const ServiceCard = () => {



  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
         <div className="grid lg:grid-cols-4">
            <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-500 text-yellow-50
                  text-center text-4xl flex justify-center items-center">
                    <MdFlight />
                </span>
                <span>
                    <p>Chep Flight</p>
                    <p>Lorem ipsum dolor sit !</p>
                </span>
            </div>
            <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full
        text-center text-4xl flex justify-center items-center">
                    <FcOnlineSupport />
                </span>
                <span>
                    <p>Eassy Suport</p>
                    <p>Lorem ipsum dolor sit !</p>
                </span>
            </div>
            <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-yellow-300 text-black
                text-center text-4xl flex justify-center items-center">
                    <FaBusinessTime />
                </span>
                <span>
                    <p>Eassy Bokking</p>
                    <p>Lorem ipsum dolor sit !</p>
                </span>
            </div>
            <div className="flex items-center gap-3" >
            <span className="w-12 h-12 rounded-full text-orange-500
           text-center text-4xl flex justify-center items-center">
                    <FaBusAlt />
                </span>
                <span>
                    <p>Travel Option</p>
                    <p>Lorem ipsum dolor sit !</p>
                </span>
            </div>
            
         </div>
    </div>
  );
};

export default ServiceCard;
