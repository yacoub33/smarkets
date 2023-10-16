import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink =
    "text-white border border-[#4DAB6C] rounded-md bg-[#0d0d0d]";
  const normalLink = "text-[#9d9d9d]";
  return (
    <div className="w-full">
      <div className="bg-[#0d0d0d] h-[52px] flex justify-center items-center">
        <img
          className="w-[150px]"
          src="https://smarkets.com/static/assets/smarkets-logo.33cf24e1279443342527.svg"
          alt="logo"
        />
      </div>

      <div className="h-[52px] bg-[#000000] flex justify-center items-center pt-5">
        <ul className="flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="m-2 py-1 rounded-sm hover:cursor-pointer">
              Football
            </li>
          </NavLink>
          <NavLink
            to="/boxing"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="m-2 py-1 rounded-sm">Boxing</li>
          </NavLink>
          <NavLink
            to="/mma"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="m-2 py-1 rounded-sm">MMA</li>
          </NavLink>
          <NavLink
            to="/americanfootball"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="m-2 py-1 rounded-sm">American Football</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
