import React from 'react'

const ContentTwo = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="h-0.5 bg-gray-200 rounded-sm"></div>
        <div className="flex justify-between items-center w-11/12 mx-auto text-2xl py-6">
          <h1>Explore marketplace</h1>
          <i className="fa fa-arrow-right  text-3xl text-blue-600"></i>
        </div>
        <div className="h-0.5 bg-gray-200 rounded-sm"></div>
        <div className="flex justify-between items-center w-11/12 mx-auto text-2xl py-6">
          <h1>See auctions </h1>
          <i className="fa fa-arrow-right text-3xl text-blue-600"></i>
        </div>
        <div className="h-0.5 bg-gray-200 rounded-sm"></div>
      </div>

      <div className="bg-gray-200  mt-20">
        <div className="flex justify-between py-6 w-11/12 mx-auto ">
          <h1 className="text-3xl font-bold">
            TOP CREATORS OF <br /> THE WEEK
          </h1>
          <div className="flex space-x-2">
            <span className=" bg-black px-0.5 rounded-lg ">
              <p className=" bg-slate-200 px-0.4 w-4/5"> </p>
            </span>
            <div className="">
              <p>Editorials</p>
              <p>Fashion</p>
              <p>Lifestyle</p>
              <p>Blueprint</p>
            </div>
          </div>
        </div>
        <p className="w-11/12 mx-auto py-6">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
      </div>
    </div>
  );
}

export default ContentTwo
