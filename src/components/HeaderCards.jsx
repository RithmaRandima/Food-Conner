import React from "react";

const HeaderCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card 01*/}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black mx-2 absolute bottom-4 bg-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      {/* card 02 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black mx-2 absolute bottom-4 bg-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      {/* card 03 */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black mx-2 absolute bottom-4 bg-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderCards;
