import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
  
  const handleProductDisplay = (item) => {
       localStorage.setItem("itemDescription", JSON.stringify(item))
       navigate("/productdisplay");  
  }
  return (
    <div>
      <div
        onClick={() => handleProductDisplay(prod)}
        className="bg-slate-100 p-1 rounded-xl"
      >
        <div >
          <img
            className="w-[100%] md:hidden"
            src={prod.coverSrc}
            alt=""

          />
          <img
            className="hidden md:block"
            src={prod.coverSrc}
            alt=""

          />
        </div>
        <div className='flex justify-between my-4'>
          <p className='text-lg'>{prod.title}</p>
          <p>${prod.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard