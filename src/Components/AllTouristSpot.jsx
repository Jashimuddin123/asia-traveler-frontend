import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTouristSpot = () => {
  const [allTourist, setAllTourist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((res) => res.json())
      .then((data) => setAllTourist(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">all tourist spot here</h1>
      {allTourist.length}
      <div className="grid grid-cols-1 mx-auto max-w-5xl">
        {allTourist.map((all, index) => (
          <li className="decoration-red-700" key={index}>
            <div className="max-w-4xl mx-auto p-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="w-2/3 p-6">
                    <div className="text-yellow-500 font-bold text-sm">
                      Bay of Bengal
                    </div>
                    <h2 className="text-2xl font-bold mt-2">
                      Saint Martin Island
                    </h2>
                    <div className="mt-4 flex items-center space-x-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        3 days & 2 nights
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        $320
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        Spring
                      </span>
                    </div>
                    <p className="mt-4 text-gray-700">
                      Saint Martin’s Island is a small island in the northeast
                      of the Bay of Bengal, known for its coral reef and white
                      sandy beaches.
                    </p>
                    <p className="mt-2 text-gray-700 font-bold">
                      Visitors Per Year: 300001
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://via.placeholder.com/24"
                        alt="Author"
                      />
                      <span className="text-gray-700">
                        by Kamruzzaman Bayezid
                      </span>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img
                      className="h-full w-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt="Saint Martin Island"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-blue-500 px-6 py-4">
                   
                    <Link to={`/touristDetails/${all._id}`}> <button>Show Details</button> </Link>
              
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

//   /* <Link to={}><button className="btn btn-secondary">show details</button></Link> */
export default AllTouristSpot;
