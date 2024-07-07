import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSpotsSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((response) => response.json())
      .then((data) => setTouristSpots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center"> {touristSpots.length}</h2>
      {touristSpots.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <div className="grid grid-cols-3 mx-auto max-w-5xl h-[700px]">
            {touristSpots.slice(0, 6).map((spot, index) => (
              <li key={index}>
                <div className="card bg-base-100 w-80 shadow-xl gap-y-4">
                  <figure className="px-10 pt-10">
                    <img
                      src={spot.photo_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{spot.country_name}</h2>
                    <p>{spot.tourist_spot_name}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                {/* Add other fields as necessary */}
              </li>
              
            ))}
            
            <Link to="/allTouristSpot">
              <button className=" w-44 mx-auto  btn btn-warning ">
                View All Tourist Spot
              </button>
            </Link>
   
          </div>
         
        </ul>
      )}
    </div>
  );
};

export default TouristSpotsSection;
