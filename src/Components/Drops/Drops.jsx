import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { drops } from './dropsData';

const Drops = () => {
  const [seeMore , setSeeMore] = useState(false)

  const handleSeeMore = () => {
    setSeeMore(prev=>!prev)
  }
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-6">
        <h1 className="text-bold text-2xl">Upcoming Drops</h1>
        <p className="text-zinc-400">
          Turn on your notification so you don't miss any drop. Thanks!
        </p>
        <button className="px-8 py-2 border border-black rounded-lg">
          Notify Me
        </button>
      </div>
      <div className="md:hidden block">
        {drops.map((drop) => {
          return (
            <>
              <div className="block sm:flex sm:space-x-10 my-8 pt-8">
                <div
                  className="w-[70%]"
                  style={{
                    position: "relative",
                  }}
                >
                  <img className=" " src={drop.image} alt="" />
                  <button className="absolute sm:hidden top-0 right-0 px-4 py-1 bg-blue-500 rounded-xl text-white">
                    {" "}
                    Upcoming
                  </button>
                  <div className="bg-slate-800 absolute opacity-60 text-bold rounded w-4/5 m-8 p-4  bottom-0 text-white">
                    <p>{drop.auctionTiming} </p>
                    <div className="flex justify-between items-center">
                      <p>{drop.autionTime }</p>
                      <p className="rounded-lg bg-blue-600 px-3 text-sm">
                        View
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className={`hidden sm:block px-4 py-1 ${drop.color} rounded-xl text-white`}>
                    {" "}
                    {drop.event}
                  </button>
                  <p className="text-zinc-600 text-xs font-semibold ">{ drop.date}</p>
                  <p className="font-semibold">
                    {drop.name} <span></span>
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum perferendis maxime, illum labore totam aliquam ipsum
                    ipsam.
                  </p>
                  <p> { drop.creator}</p>
                  <p className="underline text-blue-400">Join now</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="hidden md:block">
        {drops.map((drop) => {
          return (
            <>
              <div className="block sm:flex sm:space-x-10 my-8 pt-8">
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img className=" " src={drop.image} alt="" />
                  <button className="absolute sm:hidden top-0 right-0 px-4 py-1 bg-blue-500 rounded-xl text-white">
                    {" "}
                    Upcoming
                  </button>
                  <div className="bg-slate-800 absolute opacity-60 text-bold rounded w-4/5 m-8 p-4  bottom-0 text-white">
                    <p>Auction Ended </p>
                    <div className="flex justify-between">
                      <p>2 hours ago</p>
                      <p className="rounded-lg bg-blue-600 px-3 text-sm">
                        View
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="hidden sm:block px-4 py-1 bg-blue-500 rounded-xl text-white">
                    {" "}
                    Upcoming
                  </button>
                  <p className="text-zinc-600 text-xs font-semibold ">Nov</p>
                  <p className="font-semibold">
                    Eyo <span></span>
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum perferendis maxime, illum labore totam aliquam ipsum
                    ipsam.
                  </p>
                  <p> Creator</p>
                  <p className="underline text-blue-400">Join now</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="text-center ">
        <div className="my-6">
          <span
            onClick={handleSeeMore}
            className="border border-black rounded-lg px-4 py-2"
          >
            See More
          </span>
        </div>
        <div className="border border-black py-8 space-y-4 mt-8">
          <p>NEWSLETTER</p>
          <p>Subscribe to get daily updates on new drops & exciting deals</p>
          <input
            className="border border-black py-2 px-6 mr-2"
            type="text"
            placeholder="ENTER YOUR EMAIL"
          />{" "}
          <label htmlFor="" className="bg-black text-white py-2 px-2">
            {" "}
            SUBSCRIBE
          </label>
        </div>
      </div>
    </div>
  );
}

export default Drops