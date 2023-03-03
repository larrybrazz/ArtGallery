import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto mt-14">
      <div className="grid grid-cols-4 gap-4">
        <h3 className="font-bold text-xl hidden md:flex items-center justify-center ">
          ARTSY.
        </h3>
        <ul className="hidden md:block space-y-8">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Marketplace</NavLink>
          </li>
          <li>
            {" "}
            <NavLink>Auctions</NavLink>
          </li>
          <li>
            <NavLink>Drops</NavLink>
          </li>
        </ul>
        <ul className="hidden md:block space-y-8">
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li>
            <NavLink>Wallets</NavLink>
          </li>
          <li>
            <NavLink>Rates</NavLink>
          </li>
          <li>
            {" "}
            <NavLink>High bids</NavLink>
          </li>
        </ul>
        <div className="text-sm space-y-4">
          <p className="md:hidden block">Reach Us</p>
          <p className="flex items-center">
            <i className="fa-regular fa-envelope text-2xl mr-2" />
            <span> artsystudios@gmail.com</span>
          </p>
          <p>
            <i className="fa fa-location-dot text-2xl mr-2" />
            <span> Lagos, Nigeria.</span>
          </p>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-500">
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer
