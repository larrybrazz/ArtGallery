import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart'
import CartTotal from './CartTotal';
import MappedCartItems from './MappedCartItems';

const ShippingDetails = () => {
  return (
    <div>
      <Cart />
      <div className="w-11/12 mx-auto md:grid grid-cols-2 gap-14 text-gray-400 ">
        <div className="space-y-4">
          <p>Your email</p>
          <input
            type="email"
            name=""
            id=""
            className="border border-slate-400 rounded w-full py-2 bg-gray-200 "
          />{" "}
          <br />
          <input type="checkbox" name="" id="" className="" />
          <label htmlFor="">
            {" "}
            Get updates about new drops & exclusive offers
          </label>
          <p>Your full name</p>
          <input
            type="text"
            className="border border-slate-400 rounded w-full py-2 bg-gray-200 "
          />
          <p>Choose a wallet</p>
          <select
            name=""
            id=""
            disabled="disabled"
            className="border border-slate-400 rounded w-full py-2 bg-gray-200"
          ></select>
          <p>City</p>
          <select
            name=""
            id=""
            disabled="disabled"
            className="border border-slate-400 rounded w-full py-2 bg-gray-200"
          ></select>
          <div className="grid grid-cols-2 gap-4 first-line:">
            <div>
              <p>Country</p>
              <select
                type="text"
                className="border border-slate-400 rounded w-full py-2 bg-gray-200"
              ></select>
            </div>
            <div>
              <p>Post code</p>
              <input
                type="text"
                className="border border-slate-400 rounded w-full py-2 bg-gray-200"
              />
            </div>
          </div>
          Phone number
          <input
            type="text"
            className="border border-slate-400 rounded w-full py-2 bg-gray-200"
          />
          <Link to="/paymentdetails" >
            <button className="bg-blue-700 rounded w-full py-3 text-white">
              Proceed to payment
            </button>
          </Link>
        </div>
        <div className="hidden md:block">
          <MappedCartItems />
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails