import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { Helmet } from "react-helmet";

const TouristDetails = () => {
  const loadedDetails = useLoaderData();
  console.log("loader data", loadedDetails);
  return (
    <div>
        <Helmet>
            <title>
                Details
            </title>
        </Helmet>
      <div className="flex flex-col lg:flex-row px-6 gap-6 ">
        {/* fisrt card */}
        <div className="flex-2">
          <img
            className="w-[700px] rounded"
            src={loadedDetails.photo_url}
            alt=""
          />
           
             <div className="flex  justify-between mt-4">
               <span className="ml-4">
               <p className="text-4xl text-blue-900 font-semibold">{loadedDetails.tourist_spot_name}</p>
               <span className="flex gap-2 items-center">
               <FaLocationDot className="text-red-400 text-xl"/> 
               <p className="text-xl text-gray-500">Lets Start Travel Enjoy</p>
               </span>
               </span>
       
       
          <p className="flex items-center justify-center gap-2 w-32 h-12   bg-red-400 rounded ">
          <BiSolidOffer className="text-4xl text-green-700"/>
            <span className="text-2xl font-bold">{loadedDetails.average_cost}</span>
          </p>
             </div> <hr className="text-red-600 my-2"  />
             <p className="text-xl ml-4 ">{loadedDetails.short_description}</p>
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr>
                    <th className="border p-4">Country Name</th>
                    <th className="border p-4">{loadedDetails.country_name}</th>
                  </tr>
                  <tr>
                    <th className="border p-4">Destination</th>
                    <th className="border p-4">
                      {loadedDetails.tourist_spot_name}
                    </th>
                  </tr>
                  <tr>
                    <th className="border p-4">Average Cost</th>
                    <th className="border p-4">{loadedDetails.average_cost}</th>
                  </tr>
                  <tr>
                    <th className="border p-4">Visitors Per Year</th>
                    <th className="border p-4">
                      {loadedDetails.total_visitors}
                    </th>
                  </tr>
                  <tr>
                    <th className="border p-4">Season</th>
                    <th className="border p-4">{loadedDetails.seasonality}</th>
                  </tr>
                  <tr>
                    <th className="border p-4">location</th>
                    <th className="border p-4">{loadedDetails.location}</th>
                  </tr>
                </thead>
           
              </table>
            </div>
          </div>
        </div>

        {/* 2dn card */}
        <div className=" border ml-6 flex-1 shadow-xl shadow-red-400  px-6 ">
          <form>
            <label className="text-2xl font-semibold ">Name:</label>
            <br></br>
            <input
              className="py-3 bg-gray-200 rounded  w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Write Your Name"
            />
            <br />
            <br />
            <label className="text-2xl font-semibold ">Email:</label>
            <br></br>
            <input
               className="py-3 bg-gray-200 rounded w-full "
              type="email"
              name="email"
              id=""
              placeholder="Write Your Email"
            />
            <br />
            <br />
            <label className="text-2xl font-semibold ">Phone:</label>
            <br></br>
            <input    className="py-3 bg-gray-200 rounded w-full  " type="phone" name="phone"  id="" />
            <br />
            <br />
            <label>Date:</label>
            <br></br>
            <input    className="py-3 bg-gray-200 rounded w-full" type="date" name="" id="date" />
            <br />
            <br />
            <label className="text-2xl font-semibold ">Message:</label>
            <br></br>
            <textarea    className="py-3 bg-gray-200 rounded w-full " name="massage" id="" rows="4" required></textarea> <br />

            <button className="w-full bg-yellow-500 py-2 rounded text-xl font-semibold " type="submit">Book Now</button>
          </form>
          <img  className="w-full mt-4 rounded h-96 " src="https://i.ibb.co/DfnDSfN/3242070-15855.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TouristDetails;
