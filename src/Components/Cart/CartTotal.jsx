import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../Redux/Slice/shoppingSlice';

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getTotals());
     }, [cart, dispatch]);
  return (
    <div>
      <div className="space-y-4 text-zinc-400">
        <div className="flex justify-between">
          <p>Products in cart:</p>
          <p>{cartTotalQuantity }</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p> $2.50 </p>
        </div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>{cart.cartTotalAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal