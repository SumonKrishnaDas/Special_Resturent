import React from 'react';
import { Outlet } from 'react-router-dom';
// Font Awesome icons
import { IoHomeOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { CiHome, CiWallet, CiCalendarDate, CiShoppingCart } from "react-icons/ci"; // Circum Icons
import { MdOutlineMail } from "react-icons/md";

import { NavLink } from 'react-router-dom';

const Dasbord = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open bg-[#eeb378] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
       
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-orange-500 text-base-content min-h-full w-80 p-4 text-zinc-100">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <CiHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <CiWallet /> Payment history
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <CiCalendarDate /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <CiShoppingCart /> My Cart
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <IoHomeOutline /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
                <LuMenu /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
              <CiShoppingCart />Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:bg-white hover:text-black">
              <MdOutlineMail />Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dasbord;
