import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
const AllTouristSpot = () => {
  const [allTourist, setAllTourist] = useState([]);
  console.log('all tourist here', allTourist);

  useEffect(() => {
    fetch("https://asia-travel-server.vercel.app/touristSpots")
      .then((res) => res.json())
      .then((data) => setAllTourist(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          AllTourist
        </title>
      </Helmet>
      <h1 className="text-3xl md:text-5xl text-center font-bold my-6">All tourist spot here</h1>

      <div className="grid grid-cols-1  gap-6 mx-auto max-w-5xl">
        {allTourist.map((tourist, index) => (
          <li className="list-none" key={index}>
            <div className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-4">
                    <div className="text-yellow-500 font-bold text-sm">
                      Bay of Bengal
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mt-2">
                      {tourist.tourist_spot_name}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center space-x-2">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                        {tourist.travel_time}
                      </span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                        {tourist.average_cost}
                      </span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs md:text-sm">
                        {tourist.seasonality}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm md:text-base">
                      Saint Martin’s Island is a small island in the northeast
                      of the Bay of Bengal, known for its coral reef and white
                      sandy beaches.
                    </p>
                    <p className="mt-2 text-gray-700 font-bold text-sm md:text-base">
                      Visitors Per Year: {tourist.total_visitors}
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        src="https://i.ibb.co/99w123q/mu-img.jpg"
                        alt="Author"
                      />
                      <span className="text-gray-700 text-xs md:text-sm">by Jashim Uddin</span>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      className="h-40 w-full md:h-full md:w-full lg:w-72 lg:h-64 rounded-lg object-cover"
                      src={tourist.photo_url}
                      alt={tourist.tourist_spot_name}
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-blue-500 px-4 py-2">
                  <Link to={`/touristDetails/${tourist._id}`}>
                    <button className="text-md  font-semibold flex items-center  gap-2">Show Details <span><FaArrowCircleRight /></span></button>
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
