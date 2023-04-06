import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-5 py-2 bg-gray-700 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-5 px-5">
          <Link to="/shop">Shop </Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
