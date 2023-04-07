import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-5 py-2 bg-gray-700 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-5 px-5">
         
            <NavLink className={({ isActive }) => (isActive ? "text-orange-500 hover:text-orange-200" : "hover:text-orange-200")} to="/shop">Shop</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-orange-500 hover:text-orange-200" : "hover:text-orange-200")} to="/orders">Orders</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-orange-500 hover:text-orange-200" : "hover:text-orange-200")} to="/inventory">Inventory</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-orange-500 hover:text-orange-200" : "hover:text-orange-200")} to="/login">Login</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-orange-500 hover:text-orange-200" : "hover:text-orange-200")} to="/contact">Contact</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
