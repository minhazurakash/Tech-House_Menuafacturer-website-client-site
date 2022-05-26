import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Logout successful", {
      autoClose: 1000,
      position: "top-center",
    });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-gray-800 text-white">
      <div class="navbar container mx-auto">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="font-bold text-2xl">
            Tech House
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex ">
          <ul class="menu menu-horizontal p-0">{navItems}</ul>
        </div>
        {location.pathname.includes("dashboard") && (
          <div className="navbar-end lg:hidden">
            <label
              for="my-drawer-2"
              class="btn btn-ghost drawer-button lg:hidden"
            >
              <i class="fa-solid fa-address-card text-2xl"></i>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
