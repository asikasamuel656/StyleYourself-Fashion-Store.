import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTiktok,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* Top Bar */}
      <div className="bg-amber-700 text-white text-sm px-4 md:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
          <span className="hover:text-yellow-400 cursor-pointer">
            styleyourself@gmail.com
          </span>

          <span className="hover:text-yellow-400 cursor-pointer">
            +234 912 717 0775
          </span>
        </div>

        <div className="flex gap-4 text-lg">
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          <FaTiktok className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-amber-400 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="font-bold text-lg sm:text-xl cursor-pointer">
            StyleYourself
          </h1>

          {/* Desktop Menu (ONLY large screens) */}
          <div className="hidden lg:flex gap-8 font-medium">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="cursor-pointer hover:text-white">About</span>
            <span className="cursor-pointer hover:text-white">Collection</span>
            <span className="cursor-pointer hover:text-white">Sale</span>
            <span className="cursor-pointer hover:text-white">Reviews</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
          </div>

          {/* Search */}
          <div className="hidden md:block lg:block relative w-40 lg:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-9 lg:h-10 rounded-full border-2 border-black pl-4 pr-10 outline-none text-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer" />
          </div>

          {/* Hamburger (Mobile + Tablet) */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-6 pb-6 text-lg font-medium">

            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="cursor-pointer hover:text-white">About</span>
            <span className="cursor-pointer hover:text-white">Collection</span>
            <span className="cursor-pointer hover:text-white">Blog</span>
            <span className="cursor-pointer hover:text-white">Sale</span>
            <span className="cursor-pointer hover:text-white">Contact</span>

            {/* Search */}
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 rounded-full border border-black pl-4 pr-10 outline-none"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer" />
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;