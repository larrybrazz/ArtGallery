import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart ,decreaseCart } from '../../Redux/Slice/shoppingSlice';
import Explore from './Explore';

const ProductDisplay = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [quantity , setQuantity] = useState(0)

  const storageItem = JSON.parse(localStorage.getItem("itemDescription"));

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
     setQuantity((prev) => prev + 1);
  };

  const increaseCartItem = (item) => {
    dispatch(addToCart(item))
    setQuantity(prev=> prev + 1)
  }
  const decreaseCartItem = (item) => {
    dispatch(decreaseCart(item))
    setQuantity((prev) => prev === 0 ? 0 : prev - 1);
  }


  return (
    <div className="w-11/12 mx-auto">
      <div className=" md:flex ">
        <div className="md:border border-black p-2">
          <img className="h-full" src={storageItem.coverSrc} alt="" />
        </div>
        <div className="md:border border-black border-l-0">
          <p className="border border-black border-x-0 border-t-0 p-6 text-2xl font-semibold">
            {storageItem.title}
          </p>
          <div className="p-4 space-y-4">
            <p className="">
              <span className="md:text-slate-400">Creator :</span>{" "}
              <span className="text-blue-500">Ali Dawa</span>
            </p>
            <p className="md:text-sm  text-xs text-zinc-400"> Made in Italy</p>
            <p className="md:font-semibold text-xs text-zinc-400">
              {" "}
              Total views: 1.7k views
            </p>

            <p className="text-2xl space-x-4">
              <span onClick={() => decreaseCartItem(storageItem)}>-</span>
              <span>{quantity} </span>
              <span onClick={() => increaseCartItem(storageItem)}>+</span>
            </p>
            <p className="my-4 space-x-2">
              <span
                onClick={() => handleAddToCart(storageItem)}
                className="py-2 rounded px-10 btn bg-blue-800 text-white text-sm"
              >
                Add to Cart
              </span>{" "}
              <span className=" py-2 rounded border border-black px-2">
                <i className="fa fa-heart"></i>
              </span>{" "}
            </p>
          </div>

          <p className="border border-black border-x-0 p-6 mt-8 flex justify-between items-center text-lg">
            <span>Description</span> <i className="fa fa-angle-down"></i>{" "}
          </p>
          <p className="border border-black border-x-0 border-t-0 p-6 flex justify-between items-center  text-lg">
            <span> Listings </span>
            <i className="fa fa-angle-down"></i>{" "}
          </p>
          <p className="border border-black border-x-0 border-t-0 p-6 flex justify-between items-center  text-lg">
            <span> Status</span>
            <i className="fa fa-angle-down"></i>{" "}
          </p>
        </div>
      </div>
      <div className=" hidden mt-10 md:flex justify-between p-4 rounded shadow-lg">
        <p className="text-2xl ">Explore more from this collection</p>
        <div className="space-x-4">
          <span className="border border-black rounded-full px-4 py-3">
            {" "}
            <i className="fa fa-angle-left"></i>
          </span>
          <span className="border border-black rounded-full px-4 py-3">
            {" "}
            <i className="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
      <div className='mt-10'>
        <p className="text-2xl block md:hidden">More from this collection</p>
      </div>
      <Explore />
    </div>
  );
};

export default ProductDisplay
