const HeroSection = () => {
  return (
    <div className="flex mb-8">

      {/* Left Section */}
      <div className="w-1/2 bg-white p-16 flex items-center">
        <div className="w-2/3 font-bold font-serif">

          <span className="text-gray-800 text-5xl leading-tight block mb-4">
            Step Into Style – Discover the Trendiest Looks of the Season.
          </span>

          <div className="text-[15px] text-gray-600 mt-3">
            <span>
              Shop from a curated collection of fashion, tech, and lifestyle
              products — all at unbeatable prices with secure checkout,
              fast delivery and easy returns.
            </span>
          </div>

          <button className="bg-black rounded-full w-28 h-10 text-white mt-6 hover:shadow-2xl hover:scale-95 transition cursor-pointer">
            <span className="text-[12px]">
              Shop Now 

              {/* <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
            </svg> */}
            </span>
          </button>

        </div>
      </div>


      {/* Right Section */}
      <div className="w-1/2 bg-white flex items-center justify-center relative">

        <img
          src="/Hero_woman.png"
          alt="fashion model"
          className="h-[500px] object-contain mt-25 mr-140"
        />

        {/* White Card */}
        <div className="absolute bottom-20 left-100 p-4 bg-amber-400 rounded-xl text-sm shadow-lg hover:shadow-8xl cursor-pointer hover:scale-99">

          <div className="flex items-center mb-2">
            <img 
              src="/Lady(1).png" 
              alt="customers"
              className="rounded-full h-10 w-10"
            />

            <img 
              src="/man.png" 
              alt="customers"
              className="rounded-full h-10 w-10 -ml-2"
            />

            <img 
              src="/Lady(2).png" 
              alt="customers"
              className="rounded-full h-10 w-10 -ml-2"
            />

            <span className="text-2xl font-extrabold font-mono ml-3">
              50+
            </span>
          </div>

          <span className="leading-tight">
            Join our growing community of <br />
            satisfied customers
          </span>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;