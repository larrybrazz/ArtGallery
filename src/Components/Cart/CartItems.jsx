import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/Slice/shoppingSlice'

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);

  const removeItem = (item) => {
    dispatch(removeFromCart(item))
  };

  const increaseCartQuantity = (item) => {
    dispatch(addToCart(item))
  };
  
  const decreaseCartQuantity = (item) => {
  dispatch(decreaseCart(item))
  }
  return (
    <div>
      <div className="  shopping_cart border py-8 mt-4 w-11/12 mx-auto flex justify-between">
        <div className="flex space-x-4">
          <img className="" src={item.coverSrc} alt="" />
          <div className="text-sm space-y-2">
            <p>{item.title} </p>

            <p className="text-gray-400">Clearamane</p>
            <p className="text-gray-400">
              Size: <span className="text-black"> 200ft</span>
            </p>
            <p className="sm:block hidden space-x-4">
              <span onClick={() => decreaseCartQuantity(item)}> -</span>
              <span> {item.cartQuantity} </span>
              <span onClick={() => increaseCartQuantity(item)}>+</span>{" "}
            </p>
            <div className="sm:hidden flex justify-center items-center space-x-3 border border-black rounded-lg ">
              <span
                className="border border-r-zinc-400 text-lg"
                onClick={() => decreaseCartQuantity(item)}
              >
                {" "}
                -
              </span>
              <p>7</p>
              <span
                className="border border-l-zinc-400 text-lg"
                onClick={() => increaseCartQuantity(item)}
              >
                +
              </span>{" "}
            </div>
          </div>
        </div>
        <div
          onClick={() => removeItem(item)}
          className="space-y-10 text-xl  text-gray-500 "
        >
          <span className="border border-gray-500 px-2  text-center rounded-full">
            x
          </span>
          <p className=""> ${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItems