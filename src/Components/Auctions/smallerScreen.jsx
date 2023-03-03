import React from 'react'

const smallerScreen = () => {
  return (
    <div>
      <div className="w-full px-4 text-white flex justify-around flex-col h-full absolute top-0">
        <div className=" flex justify-between items-center">
          <p className="font-semibold">Tag: Lost or wither</p>
          <div className="space-x-4">
            <span className="bg-blue-400 px-2 rounded-lg">LIVE</span>

            <span className="bg-zinc-300 px-2 rounded-lg">
              <i className="fa fa-eye"></i> 256
            </span>
            <span className="">
              <i className="fa fa-xmark"></i>
            </span>
          </div>
        </div>
        <p className="text-center font-semibold text-2xl">Current bid: $7000</p>
        <div className="space-y-1 p-2 ">
          {images.map((image) => {
            return (
              <div key={image} className="flex space-x-2 text-xs font-bold">
                <img className="h-[50px]" src={image.image} alt="" />
                <div className="">
                  <p>{image.name}</p>
                  <p>{image.bid}</p>
                </div>
              </div>
            );
          })}
          <div className="flex ">
            <div className="flex justify-between items-center border border-black rounded-lg ">
              <input
                className="bg-transparent placeholder-white "
                type="text "
                placeholder="Place a bid"
              />
              <span className="">
                <i class="fa fa-square-arrow-up-right text-xl bg-transparent text-white"></i>
              </span>
            </div>
            <span className="flex justify-end  px-2">
              <i className="rounded-full p-2 border border-black fa fa-heart text-red-700"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default smallerScreen