import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AuthContext);

    const [list, setList] = useState([]);
    console.log('lisetd', list);
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

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpots/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                        const remaining = list.filter(item => item._id !== id);
                        setList(remaining);
                    }
                })
                .catch(err => {
                    console.error('Error deleting:', err);
                    Swal.fire(
                        'Oops!',
                        'Failed to delete item.',
                        'error'
                    );
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your item is safe :)',
                    'info'
                );
            }
        });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>My List</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Spot Name</th>
                        <th className="px-4 py-2">Travel Time</th>
                        <th className="px-4 py-2">Seasonality</th>
                        <th className="px-4 py-2">Average Cost</th>
                        <th className="px-4 py-2">Update/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr key={item._id}>
                            <td className="border px-4 py-2">{item.tourist_spot_name}</td>
                            <td className="border px-4 py-2">{item.travel_time}</td>
                            <td className="border px-4 py-2">{item.seasonality}</td>
                            <td className="border px-4 py-2">{item.average_cost}</td>
                            <td className="border px-4 py-2">
                                 <Link to={`/update/${item._id}`}  >   <button className="btn btn-primary mr-2">
                                    <FaEdit />
                                </button></Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
