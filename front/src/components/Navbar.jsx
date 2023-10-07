import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const isLoggedIn = localStorage.getItem("token"); // Check if the token is present in local storage

  const handleLogout = () => {
    // Handle logout logic here, e.g., remove all data from local storage
    localStorage.clear();
    // Redirect to the home page or any other desired page
    window.location.href = "/";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownOptions = [
    { label: "Profile", onClick: () => (window.location.href = "/profile") },
    {
      label: "Dashboard",
      onClick: () => (window.location.href = "/dashboard"),
    },
    { label: "Logout", onClick: handleLogout },
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-between items-center center-content">
      <div>
        <img
          onClick={() => (window.location.href = "/")}
          src="logos/logo_keybox_white.png"
          alt="logo_keybox"
          className=" w-28 h-28 mb-[-1rem] cursor-pointer"
        />
      </div>
      <div className="flex gap-16 text-lg">
        <button
          className=" text-white  hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </button>

        <button
          className=" text-white hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#about")}
        >
          About us
        </button>
        <button
          className=" text-white hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#services")}
        >
          Services
        </button>
        <button
          className=" text-white hover:text-secondary transition duration-300 ease-in-out"
          onClick={() => scrollToSection("#downloadapp")}
        >
          Download app
        </button>

        {isLoggedIn ? (
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <BsPerson className="text-white text-2xl" />
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 bg-white text-black p-2 space-y-2 shadow rounded"
                >
                  {dropdownOptions.map((option, index) => (
                    <div>
                      <button
                        key={index}
                        onClick={option.onClick}
                        className="w-full pb-1 text-left hover:text-secondary transition duration-300 ease-in-out"
                      >
                        {option.label}
                      </button>
                      {index !== dropdownOptions.length - 1 && (
                        <hr className="border-gray-300" />
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <button
            className=" text-white bg-gradient-to-b from-secondary to-secondary/0 hover:text-secondary transition duration-300 ease-in-out py-2 px-3 rounded-xl border-secondary border-[1px]"
            onClick={() => (window.location.href = "/signin")}
          >
            Se connecter
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
