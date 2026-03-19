import React, { useRef } from "react";
import img4 from "../assets/img4.jpg";
import hero3 from "../assets/hero3.jpg";
import FaceCap from "../assets/FaceCap.jpg";
import HandlessCart from "../assets/HandlessCart.jpg";
import Slippers from "../assets/Slippers.jpg";
import TravellingBag from "../assets/TravellingBag.jpg";
import V_Shirt from "../assets/V_Shirt.jpg";
import Belt from "../assets/Belt.jpg";
import Hoody from "../assets/Hoody.jpg";
import Perfume from "../assets/Perfume.jpg";
import ItalianShoe from "../assets/ItalianShoe.jpg";
import Sneaker from "../assets/Sneaker.jpg";
import Short from "../assets/Short.jpg";
import { FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Face cap & Hats",
    price: "$45",
    image: FaceCap,
  },
  {
    id: 2,
    name: "Handless tops",
    price: "$60",
    image: HandlessCart,
  },
  {
    id: 4,
    name: "Authentic rubber slides",
    price: "$50",
    image: Slippers,
  },
  
  {
    id: 4,
    name: "Belts",
    price: "$25",
    image: Belt,
  },
  {
    id: 5,
    name: "Traveling bags",
    price: "$25",
    image: TravellingBag,
  },
  {
    id: 6,
    name: "Vintage shirts",
    price: "$25",
    image: V_Shirt,
  },
  {
    id: 7,
    name: "Hoodies",
    price: "$25",
    image: Hoody,
  },
  {
    id: 8,
    name: "Perfumes",
    price: "$25",
    image: Perfume,
  },
  {
    id: 9,
    name: "Up & Down",
    price: "$25",
    image: img4,
  },
  {
    id: 10,
    name: "Italian Shoe",
    price: "$25",
    image: ItalianShoe,
  },
  {
    id: 11,
    name: "Sneakers",
    price: "$25",
    image: Sneaker,
  },
  {
    id: 12,
    name: "Shorts",
    price: "$25",
    image: Short,
  },
  {
    id: 12,
    name: "Baggy jeans",
    price: "$25",
    image: img4,
  },
];

const Collection = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">

      
      <div className="flex justify-between items-center mb-8">
        <div>
          {/* Section label*/}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[gold]" />
            <span className="text-[gold] font-semibold text-sm uppercase tracking-wider">
              Collection
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-2 leading-tight">
            WHAT WE <span className="text-[gold]">OFFER !</span>
          </h2>

        {/* Description */}
          <div className="space-y-5">
            <p className="text-neutral-600 text-lg leading-relaxed">
              StyleYourself brings to you, luxurious men's wear and accessories.
            </p>
          </div>
        </div>
        
        {/* carousel control button */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/shop"
          className="group inline-flex items-center gap-3 text-white bg-amber-500 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-amber-600 hover:shadow-xl"
        >
          Shop Now
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-2"/>
        </a>
      </div>
    </section>
  );
};

export default Collection;