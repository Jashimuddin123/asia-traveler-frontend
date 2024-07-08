import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);

    const [list, setList] = useState([]);
    console.log('listed', list);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/touristSpots?email=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => setList(data))
                .catch(err => setError(err.message));
        }
    }, [user?.email]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>My list here</h1>
            <div>
                {list?.map(listed => (
                    <div key={listed._id} className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Tourist Spot"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{listed.name}</h2>
                            <p>{listed.data.
country_name
}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;
