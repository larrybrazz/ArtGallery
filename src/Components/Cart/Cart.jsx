import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? "bold" : "normal",
      };
    };
  return (
    <div className="flex space-x-10 justify-center text-poppins pb-2">
      <NavLink to="/shoppingcart" style={navLinkStyles}>
        Shopping Cart 
      </NavLink>
      <NavLink to="/shoppingdetails" style={navLinkStyles}>
        Shopping Details 
      </NavLink>
      <NavLink to="/paymentdetails" style={navLinkStyles}>
        Payment Details 
      </NavLink>
    </div>
  );
}

export default Cart