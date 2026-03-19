import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

import hero4 from "../assets/hero1.jpg";
import hero6 from "../assets/hero3.jpg";
import hero7 from "../assets/hero2.jpg";

const slides = [
  {
    id: 1,
    title: "Discover Your Perfect Style",
    content:
      "Step into elegance with our latest boutique collections. From trendy outfits to timeless classics, find styles that make you stand out wherever you go.",
    image: hero7,
    ctaText: "Shop Now",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "New Arrivals Just For You",
    content:
      "Stay ahead of fashion with our newest arrivals. Fresh styles, premium fabrics, and designs carefully selected to upgrade your wardrobe.",
    image: hero6,
    ctaText: "View Collection",
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Upgrade Your Wardrobe Today",
    content:
      "Explore stylish outfits that boost your confidence and express your personality.",
    image: hero4,
    ctaText: "Start Shopping",
    ctaLink: "#",
  }
];

const textVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full min-h-[90vh] lg:h-screen overflow-hidden bg-black">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[currentSlide].id}
          src={slides[currentSlide].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].title}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8">
              {slides[currentSlide].content}
            </p>

            <a
              href={slides[currentSlide].ctaLink}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              {slides[currentSlide].ctaText}
              <FaChevronRight />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2
        bg-white/20 text-white p-2 md:p-3 rounded-full hover:bg-white/40"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2
        bg-white/20 text-white p-2 md:p-3 rounded-full hover:bg-white/40"
      >
        ▶
      </button>

    </section>
  );
}