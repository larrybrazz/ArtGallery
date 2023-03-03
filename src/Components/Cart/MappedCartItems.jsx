import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const MappedCartItems = () => {
    const cart = useSelector((state) => state.cart);
    return (
      <>
        <div>
          {cart.cartItems.length === 0 ? (
            <div className='font-semibold w-11/12 mx-auto'>
              <p> Cart is Empty</p>
              <Link className='text-blue-300' to="/marketplace">Click here to Start Shopping</Link>
            </div>
          ) : (
            <ul>
              {cart.cartItems.map((item) => (
                <CartItems key={item._id} item={item} />
              ))}
            </ul>
          )}
         
        </div>
      </>
    );
}

export default MappedCartItems