import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import { toast } from "react-toastify";
import { useTheme } from "../provider/ThemeProvider";
import { Tooltip } from "react-tooltip";
import { FaPlaneDeparture } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Log out
  const handleLogOut = () => {
    toast.info("🚪 You have successfully logged out. See you soon!", {
      icon: "👋",
    });
    navigate("/");
    logOut(navigate);
  };

  // Nav links
  const links = (
    <>
      <NavLink
        className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.2)]"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.2)]"
        to="/all-visas"
      >
        All Visas
      </NavLink>
      {user && user?.email && (
        <>
          <NavLink
            className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.2)]"
            to="/add-visa"
          >
            Add Visa
          </NavLink>
          <NavLink
            className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.2)]"
            to="/my-visas"
          >
            My Added Visas
          </NavLink>
          <NavLink
            className="py-2 px-4 rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.2)]"
            to="/my-applications"
          >
            My Visa Applications
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar  shadow-lg rounded-b-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-3xl text-blue-600 dark:text-teal-300" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl flex items-center  font-bold text-blue-600 dark:text-teal-300">
        <FaPlaneDeparture className="ml-1" />
          VisaVoyage
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          data-tooltip-id="theme-tooltip"
          data-tooltip-content={
            isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
          className="p-2 rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.5)] bg-gray-100 dark:bg-gray-700 hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {user && user?.email ? (
          <Link
            to="/my-profile"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content={`Logged in as ${user.displayName || "User"}`}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Icon"
                className="object-cover"
                src={user.photoURL || userIcon}
              />
            </div>
          </Link>
        ) : (
          <Link
            to={"/registration"}
            data-tooltip-id="register-tooltip"
            data-tooltip-content="Register your account"
            className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-100 to-teal-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.7)] font-semibold text-blue-600 transition-all hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]"
          >
            Register
          </Link>
        )}

        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            data-tooltip-id="logout-tooltip"
            data-tooltip-content="Log Out"
            className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-100 to-teal-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.7)] font-semibold text-blue-600 transition-all hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]"
          >
            Log-Out
          </button>
        ) : (
          <Link
            to={"/login"}
            data-tooltip-id="login-tooltip"
            data-tooltip-content="Log in to your account"
            className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-100 to-teal-200 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.7)] font-semibold text-blue-600 transition-all hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]"
          >
            LogIn
          </Link>
        )}
      </div>
      <Tooltip id="theme-tooltip" place="bottom" />
      <Tooltip id="profile-tooltip" place="bottom" />
      <Tooltip id="register-tooltip" place="bottom" />
      <Tooltip id="logout-tooltip" place="bottom" />
      <Tooltip id="login-tooltip" place="bottom" />
    </div>
  );
};

export default Navbar;
