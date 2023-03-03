import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = ({ setDisplay, navLinkStyles  }) => {

  const handleMenuClose = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <div className="w-screen absolute z-10 bg-white h-screen mx-auto flex flex-col justify-between">
      <div className="w-11/12  mx-auto top-0 h-3/6 flex flex-col justify-between text-lg">
        <div className="flex justify-between py-6">   
          <h1 className="font-bold text-xl"> ARTSY.</h1>
          <span>
            <i onClick={handleMenuClose} className="fa fa-xmark text-xl"></i>
          </span>
        </div>
        <NavLink onClick={handleMenuClose} style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink
          onClick={handleMenuClose}
          style={navLinkStyles}
          to="/marketplace"
        >
          Marketplace
        </NavLink>
        <NavLink onClick={handleMenuClose} style={navLinkStyles} to="/auctions">
          Auctions
        </NavLink>
        <NavLink onClick={handleMenuClose} style={navLinkStyles} to="/drops">
          Drops
        </NavLink>
      </div>
      <div className="flex justify-between  mb-16 ">
        <span></span>
        <span className="bg-blue-700 p-6 rounded-full">
          <img src="/Images/Vector.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Menu
