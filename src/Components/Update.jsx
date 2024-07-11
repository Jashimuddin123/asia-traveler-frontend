import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Update = () => {
    const initialData = useLoaderData();
    const [loadedData, setLoadedData] = useState(initialData);

    console.log('loadedData here', loadedData);

    // react useform hooks 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log('data update', data);
        try {
            const response = await fetch(`https://asia-travel-server.vercel.app/touristSpots/${loadedData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                // alert('Successfully Updated');
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: ' Updated successfully',
                 confirmButtonText: "Cool"
                });
                
            
                console.log(result);
                // Fetch the updated data and update the state
                const updatedResponse = await fetch(`https://asia-travel-server.vercel.app/touristSpots/${loadedData._id}`);
                const updatedData = await updatedResponse.json();
                setLoadedData(updatedData);
            } else {
                console.error('Update failed:', result);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
       <div>
        <Helmet>
            <title>
                Update
            </title>
        </Helmet>
         <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Update Tourist Spot</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Tourist Spot Name</label>
                            <input 
                                type="text" 
                       
                                defaultValue={loadedData.tourist_spot_name}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Tourist Spot Name" 
                                {...register('tourist_spot_name', { required: true })}
                            />
                            {errors.tourist_spot_name && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                 
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Country Name</label>
                            <input 
                                type="text" 
                                defaultValue={loadedData.country_name}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Country Name" 
                                {...register('country_name', { required: true })}
                            />
                            {errors.country_name && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
                            <input 
                                type="text" 
                                defaultValue={loadedData.location}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Location" 
                                {...register('location', { required: true })}
                            />
                            {errors.location && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Average Cost</label>
                            <input 
                                type="text" 
                                defaultValue={loadedData.average_cost}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Average Cost" 
                                {...register('average_cost', { required: true })}
                            />
                            {errors.average_cost && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Seasonality</label>
                            <select 
                                defaultValue={loadedData.seasonality}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                {...register('seasonality', { required: true })}
                            >
                                <option value="" disabled>Seasonality</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>
                                <option value="autumn">Autumn</option>
                            </select>
                            {errors.seasonality && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Photo URL</label>
                            <input 
                                type="text" 
                                defaultValue={loadedData.photo_url}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Photo URL" 
                                {...register('photo_url', { required: true })}
                            />
                            {errors.photo_url && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Travel Time</label>
                            <input 
                                type="number" 
                                defaultValue={loadedData.travel_time}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Travel Time" 
                                {...register('travel_time', { required: true })}
                            />
                            {errors.travel_time && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Total Visitors Per Year</label>
                            <input 
                                type="number" 
                                defaultValue={loadedData.total_visitors}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Total Visitors Per Year" 
                                {...register('total_visitors', { required: true })}
                            />
                            {errors.total_visitors && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Short Description</label>
                            <textarea 
                                defaultValue={loadedData.short_description}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                placeholder="Short Description" 
                                {...register('short_description', { required: true })}
                            ></textarea>
                            {errors.short_description && <p className="text-red-500 text-sm">This field is required</p>}
                        </div>
                        <div className="col-span-2">
                            <button 
                                type="submit" 
                                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                              Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       </div>
    );
};

export default Update;
