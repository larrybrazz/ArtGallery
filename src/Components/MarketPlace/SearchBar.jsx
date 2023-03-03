import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className="hidden bg-gray-100 rounded-2xl shadow-md md:flex justify-between py-2 px-5">
        <p>See 1-6 of 10 results</p>
        <p className="border border-black p-1 rounded-xl">
          sort by <i className="fa fa-angle-down"></i>
        </p>
      </div>

      <div className="md:hidden  bg-gray-100 rounded-2xl shadow-md flex justify-between py-2 px-5">
        <p>
          Filter <i className="fa fa-angle-down"></i>
        </p>
        <p className="">
          sort by <i className="fa fa-angle-down"></i>
        </p>
      </div>
    </div>
  );
}

export default SearchBar
