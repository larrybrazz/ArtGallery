import React from 'react'

const NewsLetter = () => {
  return (
    <div className="md:border md:border-black text-center text-slate-600 my-10 w-11/12 mx-auto font-sans">
      <h1 className="my-6 text-2xl">NEWSLETTER</h1>
      <p>Subscribe to get daily updates on new drops & exciting deals </p>
      <div className="my-8 space-x-2">
        <input
          className="input border border-black"
          type="text"
          placeholder="ENTER YOUR EMAIL"
        /> 
        <label className="bg-black text-xs  text-slate-300 py-3 px-4" htmlFor="">
          {" "}
          SUBSCRIBE
        </label>
      </div>
    </div>
  );
}

export default NewsLetter
