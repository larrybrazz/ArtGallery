import React from 'react'

const Topbids = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
      <div className="p-4 space-y-6 shadow-md">
        <div className="space-y-6 shadow-lg rounded-lg px-1 py-4 text-center">
          <span className="flex justify-end  px-2">
            <i className="rounded-full p-2 border border-black fa fa-heart text-red-700"></i>
          </span>
          <img src="/Images/Rectangle 57.png" alt="" />
          <p className="text-semibold text-2xl">Out of the box</p>
        </div>
        <p>
          <span className="text-zinc-500">Creator</span> :{" "}
          <span> Dan murray</span>
        </p>
        <p>
          <span className="text-zinc-500">Date</span> : <span> 23/02/2023</span>
        </p>
        <p>
          <span className="text-zinc-500">Highest bid</span> :{" "}
          <span> 3ETH</span>
        </p>
        <div className="bg-zinc-300 flex justify-between rounded-md p-4 ">
          <div>
            <p className="text-zinc-600">Current bid</p>
            <p>6 ETH</p>
          </div>
          <button className="text-white bg-blue-800 px-4 text-sm py-0 rounded">Place bid</button>
        </div>
      </div>
      <div className="p-4 space-y-6 shadow-md">
        <div className="space-y-6 shadow-lg rounded-lg px-1 py-4 text-center">
          <span className="flex justify-end  px-2">
            <i className="rounded-full p-2 border border-black fa fa-heart text-red-700"></i>
          </span>
          <img src="/Images/Rectangle 57.png" alt="" />
          <p className="text-semibold text-2xl">Out of the box</p>
        </div>
        <p>
          <span className="text-zinc-500">Creator</span> :{" "}
          <span> Dan murray</span>
        </p>
        <p>
          <span className="text-zinc-500">Date</span> : <span> 23/02/2023</span>
        </p>
        <p>
          <span className="text-zinc-500">Highest bid</span> :{" "}
          <span> 3ETH</span>
        </p>
        <div className="bg-zinc-300 flex justify-between rounded-md p-4 ">
          <div>
            <p className="text-zinc-600">Current bid</p>
            <p>6 ETH</p>
          </div>
          <button className="text-white bg-blue-800 px-4 text-sm py-0 rounded">Place bid</button>
        </div>
      </div>

     
    </div>
  );
}

export default Topbids