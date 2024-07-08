import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyList = () => {
    const {user} = useContext(AuthContext)
    console.log('user here',user);

      
    const [list, setList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/touristSpots?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> console.log('data here', data))
    }, [user.email])
    return (
        <div>
             my list
        </div>
    );
};

export default MyList;