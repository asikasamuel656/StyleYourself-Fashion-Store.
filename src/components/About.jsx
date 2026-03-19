import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import hero3 from "../assets/hero3.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 py-12 bg-neutral-50 items-center gap-10">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-0.5 bg-[gold]" />
          <span className="text-[gold] font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
          WHO WE <span className="text-[gold]">ARE !</span>
        </h2>

        {/* Description */}
        <div className="space-y-5">
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            StyleYourself is a fashion store where style meets confidence.
            We provide trendy clothing, stylish accessories, and elegant
            perfumes designed to help you express your personality.
          </p>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Mission */}
            <div className="p-4 bg-neutral-200 rounded-lg shadow-xl">
              <div className="w-9 h-9 bg-[gold] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622" />
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2">
                Our Mission
              </h3>

              <p className="text-neutral-600 text-sm">
                To help customers express their personality through stylish,
                trendy and affordable fashion.
              </p>
            </div>

            {/* Vision */}
            <div className="p-4 bg-neutral-200 rounded-lg shadow-xl">
              <div className="w-9 h-9 bg-[gold] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2">
                Our Vision
              </h3>

              <p className="text-neutral-600 text-sm">
                To become a trusted fashion brand inspiring uniqueness through style.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
          <a className="group inline-flex justify-center items-center gap-3 text-white bg-amber-500 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-amber-600 hover:shadow-xl w-full sm:w-auto">
            Contact Us
            <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] aspect-square">

          {/* Glow */}
          <div className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-amber-200 blur-3xl rounded-full -z-10 top-10 left-10"></div>

          {/* Main Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <img src={img5} alt="main" className="w-full h-full object-cover" />
          </div>

          {/* Top Image */}
          <motion.div
            className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src={img4} alt="top" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-36 sm:w-44 md:w-56 h-24 sm:h-28 md:h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img src={hero3} alt="bottom" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;