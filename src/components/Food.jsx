import React, { useState } from "react";
import { data } from "../assets/Data";

const Food = () => {
  const [food, setFood] = useState(data);

  // filter type
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.Category === category;
      })
    );
  };

  // filter price
  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFood(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Burgers
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("salad")}
            >
              Salads
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">FIlter Price</p>
          <div className="flex justify-between max-w-[390px] flex-wrap">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterPrice("$")}
            >
              $
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterPrice("$$")}
            >
              $$
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterPrice("$$$")}
            >
              $$$
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterPrice("$$$$")}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className=" shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.img}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="font-bold">
                <span className="bg-orange-500 rounded-full px-3 text-white">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
