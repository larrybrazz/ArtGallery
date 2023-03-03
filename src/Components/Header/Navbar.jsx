import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const {cartTotalQuantity} = useSelector(state => state.cart)


  const handleMenuOpen = () => {
    setDisplay((prev) => !prev);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    <div>
      <div className="hidden md:block">
        <div className=" w-11/12 py-12 flex justify-between items-center mx-auto ">
          <h1 className="font-bold text-xl"> ARTSY.</h1>
          <div className="space-x-10 text-lg">
            <NavLink style={navLinkStyles} to="/">
              Home
            </NavLink>
            <NavLink style={navLinkStyles} to="/marketplace">
              Marketplace
            </NavLink>
            <NavLink style={navLinkStyles} to="/auctions">
              Auctions
            </NavLink>
            <NavLink style={navLinkStyles} to="/drops">
              Drops
            </NavLink>
          </div>
          <div className="space-x-6">
            <NavLink>
              <i className="fa fa-magnifying-glass"></i>
            </NavLink>
            <NavLink className="relative" to="/shoppingcart">
              <i className="fa fa-cart-shopping"></i>
              <span
                className={`absolute text-transparent ${
                  cartTotalQuantity === 0 ? "bg-transparent" : " bg-red-500"
                } rounded-full h-1 w-1`}
              >
                {" "}
                {cartTotalQuantity}
              </span>
            </NavLink>
            <NavLink>
              <i className="fa-regular fa-bell"></i>
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" md:hidden w-11/12 mx-auto py-6 flex justify-between items-center">
        <span>
          <i onClick={handleMenuOpen} className="fa fa-bars"></i>
        </span>
        <h3 className="font-bold text-xl">ARTSY.</h3>
        <div className="space-x-6">
          <i className="fa fa-magnifying-glass"></i>
          <NavLink className="relative" to="/shoppingcart">
            <i className="fa fa-cart-shopping"></i>
            <span
              className={`absolute text-transparent ${
                cartTotalQuantity === 0 ? "bg-transparent" : " bg-red-500"
              } rounded-full h-1 w-1`}
            >
              {" "}
              {cartTotalQuantity}
            </span>
          </NavLink>
        </div>
      </div>
      <div className="w-11/12 mx-auto absolute hamburger-overlay">
        {display && (
          <Menu navLinkStyles={navLinkStyles} setDisplay={setDisplay} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
