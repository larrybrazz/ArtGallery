import React from 'react'

const Filter = () => {
  return (
    <div>
      <div className=" bg-gray-300 py-1 pl-6 rounded-xl text-gray-500 w-3/4 ">
        <i className="fa fa-magnifying-glass mr-4"></i>
        Search
      </div>

      <div className="flex font-semibold mb-2 mt-12">
        <img src="/Images/792958.png" alt="" width="20px" className="mr-4" />{" "}
        <p> Filter </p>
      </div>

      <div className="h-0.5 bg-gray-400 rounded-sm"></div>

      <div className="flex flex-col">
        <h2 className="my-8 font-semibold">By category</h2>
        <ul>
          <li>
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Editorials</label>
          </li>
          <li>
            {" "}
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Fashion</label>
          </li>
          <li>
            {" "}
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Optics</label>
          </li>
          <li>
            {" "}
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Arts & Museum</label>
          </li>
          <li>
            {" "}
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">Nature</label>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="mt-8 font-semibold"> By price </h5>
        <p>$100.00 - $150.00</p>
      </div>

      <div>
        <h5 className="mt-8 font-semibold"> By artist </h5>
        <p>All</p>
        <p>Below $100.00</p>
        <p>$100.00 - $150.00</p>
        <p>$150.00 - $200.00</p>
        <p>Above $200.00</p>
      </div>

      <div>
        <h5 className="mt-8 font-semibold"> Collection year </h5>
        <p>$100.00 - $150.00</p>
      </div>
    </div>
  );
}

export default Filter
