import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTouristSpot = () => {
  const [allTourist, setAllTourist] = useState([]);
  console.log('all tourist here', allTourist);

  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((res) => res.json())
      .then((data) => setAllTourist(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold">All tourist spot here</h1>
      <div className="text-center text-3xl font-bold"> {allTourist.length}</div>
      <div className="grid grid-cols-1 mx-auto max-w-5xl">
        {allTourist.map((tourist, index) => (
          <li className="decoration-red-700" key={index}>
            <div className="max-w-4xl mx-auto p-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="w-2/3 p-6">
                    <div className="text-yellow-500 font-bold text-sm">
                      Bay of Bengal
                    </div>
                    <h2 className="text-2xl font-bold mt-2">
                      {tourist.tourist_spot_name}
                    </h2>
                    <div className="mt-4 flex items-center space-x-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                      {tourist.travel_time}
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        {tourist.average_cost}
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        {tourist.seasonality}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-700">
                      Saint Martin’s Island is a small island in the northeast
                      of the Bay of Bengal, known for its coral reef and white
                      sandy beaches.
                    </p>
                    <p className="mt-2 text-gray-700 font-bold">
                      Visitors Per Year: {tourist.total_visitors}
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://i.ibb.co/99w123q/mu-img.jpg"
                        alt="Author"
                      />
                      <span className="text-gray-700">by Jashim Uddin</span>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img
                      className="h-full w-full lg:w-72 lg:h-64  rounded-lg object-cover"
                      src={tourist.photo_url}
                      alt={tourist.tourist_spot_name}
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-blue-500 px-6 py-4">
                  <Link to={`/touristDetails/${tourist._id}`}>
                    <button>Show Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
