// import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { setCurrentUser } from "../../actions/currentUser";
import Avatar from "../Avatar/Avatar";

import { IoClose } from "react-icons/io5";
import bars from "../../assets/bars-solid.svg";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully");
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    // if (token) {
    //   const decodedToken = decode(token);
    //   if (decodedToken.exp * 1000 < new Date().getTime()) {
    //     handleLogout();
    //   }
    // }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    // eslint-disable-next-line
  }, [User?.token, dispatch]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsNavOpen(true)}
        >
          <img src={bars} alt="Menu" className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-8" />
          </Link>
          <Link
            className="hidden lg:block text-sm text-gray-700 hover:text-blue-500 transition duration-200"
            to="/"
          >
            Community
          </Link>
          <button
            className="hidden lg:block text-sm text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Chatbot
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <form className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-gray-600 focus:outline-none"
            />
            <img src={search} alt="Search" className="w-4 h-4 ml-2" />
          </form>
          {User === null ? (
            <Link
              to="/Auth"
              className="text-sm text-blue-500 hover:text-blue-600 transition duration-200"
            >
              Log In
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button
                className="text-sm text-red-500 hover:text-red-600 transition duration-200"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 left-0 w-4/5 bg-white h-full shadow-lg rounded-r-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              className="self-end text-gray-600 hover:text-black mb-6"
              onClick={() => setIsNavOpen(false)}
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Links */}
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/Questions"
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                Questions
              </Link>
              <Link
                to="/Tags"
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                Tags
              </Link>
              <Link
                to="/Users"
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                Users
              </Link>
            </div>

            {/* Add some extra padding or space at the bottom for better spacing */}
            <div className="flex-grow" />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
