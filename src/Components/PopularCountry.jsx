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
            <p className="text-4xl text-center mb-8"> {popular.length}</p>
            <h1 className="text-3xl font-bold mb-8 text-center">Articles you might like</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popular.map(like => (
                        <div className="card bg-base-100 w-full shadow-xl" key={like._id}>
                            <figure className="px-10 pt-10">
                                <img
                                    src={like.image}
                                    alt={like.country_name}
                                    className="rounded-xl w-full h-64 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{like.country_name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularCountry;
