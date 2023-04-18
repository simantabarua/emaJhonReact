import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/Logo.svg";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="navbar flex justify-between px-5 py-2 bg-gray-700 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-5 px-5 items-center">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>

          {user ? (
            <div className="flex gap-2 items-center">
              <p>{user.email}</p>{" "}
              <button className="btn bg-orange-400" onClick={logoutUser}>
                Sign Out
              </button>
            </div>
          ) : (
            <Link className="btn bg-orange-400" to="/signin">
              SignIn
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
