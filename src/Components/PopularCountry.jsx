import { useEffect, useState } from "react";

const PopularCountry = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPopular(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto mt-20 p-4">

            <h1 className="text-3xl font-bold mb-8 text-center">Articles you might like</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popular.map(like => (
                        <div className="card bg-base-100 w-full h-96  shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={like._id}>
                            <figure className="px-10 pt-10">
                                <img
                                    src={like.image}
                                    alt={like.country_name}
                                    className="rounded-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{like.country_name}</h2>
                                <p className="text-md text-gray-600  ">{like.total_visitors_per_year}</p>
                                <p className="text-gray-400">{like.location_short_description}</p>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularCountry;
