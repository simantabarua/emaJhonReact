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
         
            <NavLink  to="/shop">Shop</NavLink>
            <NavLink  to="/orders">Orders</NavLink>
            <NavLink  to="/inventory">Inventory</NavLink>
            <NavLink  to="/login">Login</NavLink>
            <NavLink  to="/signup">Sign Up</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
