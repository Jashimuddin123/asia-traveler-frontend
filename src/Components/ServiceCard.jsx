// src/App.js

import { MdFlight } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";


const ServiceCard = () => {



  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
         <div className="grid lg:grid-cols-4">
            <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-500 text-yellow-50
                  text-center text-4xl flex justify-center items-center">
                    <MdFlight />
                </span>
                <span>
                    <p className="text-xl font-semibold">Chep Flight</p>
                    <p className="text-gray-600">Cheap Flights Under $99 </p>
                </span>
            </div>
            <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full
        text-center text-4xl flex justify-center items-center">
                    <FcOnlineSupport />
                </span>
                <span>
                    <p className="text-xl font-semibold">Eassy Suport</p>
                    <p className="text-gray-600">We Provide Best Support</p>
                </span>
            </div>
            <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-green-500 text-black
                text-center text-4xl flex justify-center items-center">
                    <FaBusinessTime />
                </span>
                <span>
                    <p className="text-xl font-semibold">Eassy Bokking</p>
                    <p className="text-gray-600">You Can Alwayes Book</p>
                </span>
            </div>
            <div className="flex items-center gap-3" >
            <span className="w-12 h-12 rounded-full text-orange-500
           text-center text-4xl flex justify-center items-center">
                    <FaBusAlt />
                </span>
                <span>
                    <p className="text-xl font-semibold">Travel Option</p>
                    <p className="text-gray-600">Differnt  options we have</p>
                </span>
            </div>
            
         </div>
    </div>
  );
};

export default ServiceCard;
