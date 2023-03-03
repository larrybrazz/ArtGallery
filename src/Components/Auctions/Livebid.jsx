import React from 'react'

const Livebid = () => {
    const images = [
      {
        image: "/Images/Ellipse 45.png",
        name: "Bella Bliss",
        bid: "$9000",
      },
      {
        image: "/Images/Ellipse 46.png",
        name: "Bella Bliss",
        bid: "$3000",
      },
      {
        image: "/Images/Ellipse 47.png",
        name: "Bella Bliss",
        bid: "Ready for bid",
      },
      {
        image: "/Images/Ellipse 48.png",
        name: "Bella Bliss",
        bid: "Tight bid",
      },
      
    ];

    const liveBids = JSON.parse(localStorage.getItem("livebid"));
    return (
      <>
        <div className=" w-3/5 mx-auto grid grid-cols-2 gap-6 md:border border-black">
          <div className="relative w-[100vw] md:w-fit">
            <img
              className="h-[100vh] md:h-full w-full"
              src={liveBids.image}
              alt=""
            />
            <div className="w-full px-4 text-white flex justify-around flex-col h-full absolute top-0">
              <div className=" flex justify-between items-center">
                <p className="font-semibold md:hidden">Tag: Lost or wither</p>
                <span className="hidden md:block px-2 py-1 rounded-full bg-zinc-300 ">
                  <i className="fa fa-xmark"></i>
                </span>
                <span className="hidden md:block bg-blue-400 px-2 rounded-lg">
                  LIVE
                </span>
                <div className="space-x-4 md:hidden ">
                  <span className="bg-blue-400 px-2 rounded-lg">LIVE</span>

                  <span className="bg-zinc-300 px-2 rounded-lg md:hidden">
                    <i className="fa fa-eye"></i> 256
                  </span>
                  <span className="md:hidden text-xl font-bold">
                    <i className="fa fa-xmark"></i>
                  </span>
                </div>
              </div>
              <p className="text-center font-semibold text-2xl">
                Current bid: $7000
              </p>
              <p className="font-semibold hidden md:block">
                Tag: Lost or wither
              </p>
              <div className=" p-2 block md:hidden">
                {images.map((image) => {
                  return (
                    <div key={image} className="flex s">
                      <img className="h-10" src={image.image} alt="" />
                      <div className="">
                        <p className="font-bold">{image.name}</p>
                        <p>{image.bid}</p>
                      </div>
                    </div>
                  );
                })}
                <p className="my-6 text-zinc-400 ">
                  <span className="">Creator</span> : <span>LarryBrazz</span>
                </p>
                <div className="flex ">
                  <div className="flex justify-between items-center border border-white rounded-lg px-12">
                    <input
                      className="bg-transparent placeholder-white"
                      type="text bg-zinc-400 "
                      placeholder="Place a bid"
                    />
                    <span className="">
                      <i class="fa fa-square-arrow-up-right text-xl"></i>
                    </span>
                  </div>
                  <span className="flex justify-end  px-2">
                    <i className="rounded-full p-2 border border-white fa fa-heart text-red-700"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 p-2 hidden md:block">
            {images.map((image) => {
              return (
                <div key={image} className="flex space-x-6">
                  <img className="w-100" src={image.image} alt="" />
                  <div className="space-y-4">
                    <p>{image.name}</p>
                    <p>{image.bid}</p>
                  </div>
                </div>
              );
            })}
            <p className="my-6 text-zinc-400 ">
              <span className="">Creator</span> : <span>LarryBrazz</span>
            </p>
            <div className="flex ">
              <div className="flex justify-between items-center border border-black rounded-lg px-12">
                <input type="text bg-zinc-400 " placeholder="Place a bid" />
                <span className="">
                  <i class="fa fa-square-arrow-up-right text-xl"></i>
                </span>
              </div>
              <span className="flex justify-end  px-2">
                <i className="rounded-full p-2 border border-black fa fa-heart text-red-700"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="w-11/12 hidden md:block mx-auto mt-8 pl-50 font-bold text-2xl">
            See Upcoming drops{" "}
            <span className="rounded-full border border-black py-1 px-2 ml-2">
              <i class="fa fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </>
    );
}

export default Livebid