import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import userIcon from "../assets/user.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
        All visas
      </NavLink>
      {user && user?.email ? (
        <NavLink
          className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
          to="/add-visa"
        >
          Add Visa
        </NavLink>
      ) : null}
      {user && user?.email ? (
        <NavLink
          className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
          to="/my-visas"
        >
          My added visas
        </NavLink>
      ) : null}
      {user && user?.email ? (
        <NavLink
          className="btn btn-sm bg-gradient-to-r from-blue-100 to-teal-100 border-none text-blue-400 font-semibold shadow-xl"
          to="/my-applications"
        >
          My Visa applications
        </NavLink>
      ) : null}
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
        {user && user?.email ? (
          <div
            data-tip={user && user?.email ? user?.displayName : "hello"}
            className=" tooltip tooltip-left"
          >
            <Link
              to="/my-profile"
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user && user?.email ? (
                  <img
                    alt="User Photo"
                    className="object-cover"
                    src={user?.photoURL}
                  />
                ) : (
                  <img
                    alt="User Icon"
                    className="object-cover"
                    src={userIcon}
                  />
                )}
              </div>
            </Link>
          </div>
        ) : (
          <Link
            to={"/registration"}
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            Register
          </Link>
        )}

        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            Log-Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-lg border-none text-xl font-semibold shadow-xl"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
