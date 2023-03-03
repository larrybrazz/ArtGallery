import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart'
import CartTotal from './CartTotal';

const PaymentDetails = () => {
  return (
    <div>
      <Cart />
      <div className="w-11/12 mx-auto">
        <div className="sm:flex justify-between mt-5 text-zinc-400 ">
          <p className="sm:block hidden">Payment method</p>
          <p>
            <i className="fa fa-lock"></i> Secure server
          </p>
        </div>
        <div className="sm:grid gap-6 grid-cols-2 my-8">
          <div className="space-y-8 text-zinc-400 p-6 border border-zinc-300 rounded">
            <div className=" flex justify-between ">
              <div>
                <input
                  className="checkbox bg-green-500"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label htmlFor="">Select your wallet </label>
              </div>
              <span className="flex ">
                <img
                  className="h-10"
                  src="/Images/MetaMask - jpeg.png"
                  alt=""
                />
                <img className="h-10" src="/Images/Coinbase - png.png" alt="" />
                <img
                  className="h-10"
                  src="/Images/WalletConnect - jpeg.png"
                  alt=""
                />
                <img className="h-10" src="/Images/Phantom - jpeg.png" alt="" />
              </span>
            </div>
            <p>
              Connect with one of our available wallet provider or add and
              connect a new WalletConnect
            </p>
            <div>
              <div className="">
                <p>Wallet Type</p> <br />
                <input
                  type="text"
                  className="border border-slate-400 rounded w-full py-2 bg-gray-200 "
                />
                <p className="mt-6">Key</p> <br />
                <input
                  type="text"
                  className="border border-slate-400 rounded w-full py-2 bg-gray-200 "
                />
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div>
                    <p>Expiry date</p>
                    <select
                      type="text"
                      className="border border-slate-400 rounded w-full py-2 bg-gray-200"
                    ></select>
                  </div>
                  <div>
                    <p>CVV</p>
                    <input
                      type="text"
                      className="border border-slate-400 rounded w-full py-2 bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to="/" >
              <button className="bg-blue-700 rounded w-full py-3 text-white">
                Confirm
              </button>
            </Link>
          </div>
          <div className="space-y-6 sm:block hidden">
            <p className="font-semibold text-lg">Payment Summary</p>
            <div className="border border-zinc-300 bg-zinc-400 w-full"></div>
            <p className="">Metamask wallet: sxdc2ft6vgybu76hwf2</p>
            <p className="text-zinc-400">
              Actively linked to Ogba, Lagos , Nigeria
            </p>
            <div className="border border-zinc-300 w-full"></div>
            <p>
              Expected arrival date: Between 22nd february and 26th february
              2023
            </p>
            <div className="border border-zinc-300 w-full"></div>
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails