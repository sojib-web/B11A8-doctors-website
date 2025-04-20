// @ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar  shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="navbar-start space-x-2">
          <img src={logo} alt="" className="w-10" />
          <span className="text-xl font-bold">MediCare Hub</span>
        </div>
        <div className="navbar-center text-[#0F0F0FB3]">
          <ul className="menu menu-horizontal px-1">
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
                to="/abot"
              >
                My-Bookings
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/abot"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/abot"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn text-white bg-[#176AE5] rounded-2xl">
            Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
