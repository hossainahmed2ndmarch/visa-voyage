import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import { toast } from "react-toastify";
import { useTheme } from "../provider/ThemeProvider";
import { Tooltip } from "react-tooltip"; // Updated import for Tooltip

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
        className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
        to="/all-visas"
      >
        All Visas
      </NavLink>
      {user && user?.email && (
        <>
          <NavLink
            className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
            to="/add-visa"
          >
            Add Visa
          </NavLink>
          <NavLink
            className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
            to="/my-visas"
          >
            My Added Visas
          </NavLink>
          <NavLink
            className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
            to="/my-applications"
          >
            My Visa Applications
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-3xl text-blue-400" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">VisaVoyage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          data-tooltip-id="theme-tooltip"
          data-tooltip-content={
            isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        {user && user?.email ? (
          <div>
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
          </div>
        ) : (
          <Link
            to={"/registration"}
            data-tooltip-id="register-tooltip"
            data-tooltip-content="Register your account"
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            Register
          </Link>
        )}

        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            data-tooltip-id="logout-tooltip"
            data-tooltip-content="Log Out"
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            Log-Out
          </button>
        ) : (
          <Link
            to={"/login"}
            data-tooltip-id="login-tooltip"
            data-tooltip-content="Log in to your account"
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            LogIn
          </Link>
        )}
      </div>
      {/* React-Tooltip Instances */}
      <Tooltip id="theme-tooltip" place="bottom" />
      <Tooltip id="profile-tooltip" place="bottom" />
      <Tooltip id="register-tooltip" place="bottom" />
      <Tooltip id="logout-tooltip" place="bottom" />
      <Tooltip id="login-tooltip" place="bottom" />
    </div>
  );
};

export default Navbar;
