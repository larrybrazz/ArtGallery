import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartTotal from './CartTotal';
import MappedCartItems from './MappedCartItems';
import "./ShoppingCart.css"

const ShoppingCart = ({cartTotalQuantity}) => {
 

    return (
      <div>
        <Cart />
        <MappedCartItems />
        <div className=" w-11/12 mx-auto sm:grid grid-cols-2 mt-8 text-slate-500">
          <div className="flex justify-between flex-col">
            <div className="sm:block hidden ">
              <Link to="/shippingdetails">
                <button className="py-3 px-6  bg-blue-700 text-white rounded">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
          <CartTotal cartTotalQuantity={cartTotalQuantity} />
          <div className="sm:hidden text-center mt-8">
            <Link to="/shippingdetails">
              <button className="py-3 px-6  bg-blue-700 text-white rounded">
                Proceed to checkout
              </button>{" "}
            </Link>

            <br />
            <Link to="/marketplace">Continue shopping</Link>
          </div>
          <Link to="/marketplace" className="sm:block hidden">
            Continue shopping
          </Link>
        </div>
      </div>
    );
}

export default ShoppingCart