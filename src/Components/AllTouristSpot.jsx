import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllTouristSpot = () => {
    const [allTourist, setAllTourist] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/touristSpots')
        .then(res=> res.json())
        .then(data=>setAllTourist(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">all tourist spot here</h1>
            {allTourist.length}
            <div className="grid grid-cols-3 mx-auto max-w-5xl">
            {allTourist.map((all, index) => (
              <li key={index}>
                <div className="card bg-base-100 w-96 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={all.photo_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{all.country_name}</h2>
                    <p>{all.tourist_spot_name}</p>
                    <div className="card-actions">
                     <Link to={}><button className="btn btn-secondary">show details</button></Link>
                    </div>
                  </div>
                </div>
                {/* Add other fields as necessary */}
              </li>
            ))}
            
          </div>
       
        </div>
    );
};

export default AllTouristSpot;