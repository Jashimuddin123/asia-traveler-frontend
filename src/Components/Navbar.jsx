import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/allTouristSpot">All Tourists Spot</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/addTourist">Add Tourist Spot</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/mylist">My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-500 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-4xl text-red-900 font-bold">
          Asian Traveler
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex items-center">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJc7wKqPMCQLn6jwrRnztkwnqj9U3Y15M6EhPDYm392fM0SLNpK=s576-c-no"
                  alt="User Avatar"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost text-red-800">ADNAN</button>
              </li>
              <li>
                <button onClick={logOut} className="btn text-green-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 rounded text-white bg-red-900">Login</button>
          </Link>
        )}
        <button className="bg-orange-600 text-white px-4 rounded py-2 ml-4">
          01820339433
        </button>
      </div>
    </div>
  );
};

export default Navbar;
