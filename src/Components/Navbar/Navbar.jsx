// @ts-nocheck
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Botton/Button";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24 relative">
        <div className="navbar-start space-x-2">
          <img src={logo} alt="" className="w-10" />
          <span className="text-xl font-bold">MediCare Hub</span>
        </div>

        <div className="navbar-center text-[#0F0F0FB3]">
          <ul
            className={`menu menu-horizontal px-1 space-x-4 md:flex ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex transition-all duration-300 ease-in-out absolute bg-white w-full lg:left-0  top-0 lg:top-0 z-20 lg:relative md:hidden  lg:mt-0 mt-20 lg:w-auto lg:bg-transparent rounded-2xl `}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/my_booking"
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/blog"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="absolute top-4 right-4 lg:hidden cursor-pointer">
          <button className="text-2xl" onClick={toggleMenu}>
            <IoMdMenu className="cursor-pointer" />
          </button>
        </div>

        <div className="navbar-end lg:flex hidden">
          <Button label="Emergency" onClick={undefined} className={undefined} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
