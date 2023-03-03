import React from 'react'

const Content = () => {
  return (
    <div
      className="text-white"
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 mx-auto">
        <p className="pt-4 pb-3 text-2xl">
          See Upcoming Auctions and Exhibitions
        </p>
        <div className="h-0.5 bg-gray-200 rounded-sm"></div>
        <div className="relative mt-2">
          <img className="" src="/Images/Rectangle 91.png" alt="" />
          <div className="absolute md:top-4 overlay mx-4">
            <div className=" space-y-4">
              <span className="px-0.5 bg-white  rounded-full"> i</span>
              <p className="text-3xl">01</p>
            </div>
            <div>
              <h1>MONALISA REDEFINED IN STYLE.</h1>
              <p className="">Start on : 08:00 GTS . Monday </p>
              <p className="text-xm">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="border-b">See More</span>
              <span className="border rounded-lg py-2 px-1 ">
                Set a reminder
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-2/5 h-2 bg-slate-500 my-10 rounded-2xl mb-4">
            <div className="w-14 bg-white h-2 rounded-2xl"> </div>
          </div>
          <div className="ml-4 space-x-4">
            <span className=" px-3 py-2 rounded-full bg-orange-100 shadow-xl">
              <i className="fa fa-angle-left" />
            </span>
            <span className=" px-3 py-2 rounded-full bg-orange-100 shadow-xl">
              <i className="fa fa-angle-right" />
            </span>
          </div>
        </div>

        <div className="mt-4 text-green-300">.</div>
      </div>
    </div>
  );
}

export default Content
