import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] flex mx-auto justify-between items-center p-4">
      {/* left side */}
      <div onClick={() => setNav(!nav)} className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
          food <span className="font-bold">Connrer</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 px-4">Delivery</p>
          <p className="p-2 px-4">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="Search Food"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        <></>
      )}

      {/* sidebar drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="cursor-pointer absolute right-4 top-4"
          size={20}
        />
        <h2 className="text-2xl p-4">
          Food <span className="font-bold">Conner</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4">
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-4" />
              Orders{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
