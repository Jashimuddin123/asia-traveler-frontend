import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbCards } from "react-icons/tb";
import { FiCloudOff } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";




const TouristSpotsSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((response) => response.json())
      .then((data) => setTouristSpots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-5xl text-center mb-6">{touristSpots.length}</h2>
      {touristSpots.length === 0 ? (
        <p className="text-5xl text-center font-bold">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {touristSpots.slice(0, 6).map((spot, index) => (
            <li key={index}>
              <div className="card bg-base-100 w-full h-80 shadow-xl">
                <figure className="px-10 pt-10">
                  <img 
                  className="w-72 h-96 rounded-xl"
                    src={spot.photo_url}
                    alt={spot.tourist_spot_name}
                   
                  />
                </figure>
                <div className="card-body items-center text-center">
                <p className="text-3xl mt-0 font-bold ">{spot.tourist_spot_name}</p>
         
                  {/* <h2 className="card-title">{spot.country_name}</h2> */}
            
                     <span className="flex gap-3 items-center "> 
                          <p><FaLocationDot /></p>
                     <p>{spot.location}</p>
                     </span>
                     
                     <div className="flex gap-10 ">
                        <span className="flex gap-3 items-center">
                          <p className="text-orange-500"><TbCards /></p>
                        <p className="text-red-800">{spot.average_cost}</p>
                   
                        </span>
                            
                       <div>
                        <span className="flex gap-3 items-center">
                        <FiCloudOff />
                        <p>{spot.seasonality}</p>
                        </span>
                       </div>

                     </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center mt-6">
        <Link to="/allTouristSpot">
          <button className="btn btn-warning w-full md:w-auto">
            View All Tourist Spots
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpotsSection;
