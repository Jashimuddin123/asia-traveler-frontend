import { useLoaderData } from "react-router-dom";


const TouristDetails = () => {
    const loadedDetails = useLoaderData()
    console.log('loader data',loadedDetails);
    return (
        <div>
            <h2 className="text-5xl">this is touris details</h2>

      
       
            </div>
      
    );
};

export default TouristDetails;