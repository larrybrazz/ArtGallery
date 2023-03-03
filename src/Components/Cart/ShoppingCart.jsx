import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotals } from '../../Redux/Slice/shoppingSlice';
import Cart from './Cart';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import MappedCartItems from './MappedCartItems';
import "./ShoppingCart.css"

const ShoppingCart = () => {

    return (
      <div>
        <Cart />
        <MappedCartItems />
        <div className=" w-11/12 mx-auto sm:grid grid-cols-2 mt-8 text-slate-500">
          <div className="flex justify-between flex-col">
            <div className="sm:block hidden ">
              <button className="py-3 px-6  bg-blue-700 text-white rounded">
                Proceed to checkout
              </button>
            </div>
          </div>
          <CartTotal />
          <div className="sm:hidden text-center mt-8">
            <button className="py-3 px-6  bg-blue-700 text-white rounded">
              Proceed to checkout
            </button>{" "}
            <br />
            <Link>Continue shopping</Link>
          </div>
          <Link className="sm:block hidden">Continue shopping</Link>
        </div>
      </div>
    );
}

export default ShoppingCart