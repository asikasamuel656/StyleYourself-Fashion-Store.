import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* Top Bar */}
      <div className="bg-amber-800 text-white text-sm px-4 md:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-center sm:text-left">
          <span className="cursor-pointer hover:text-yellow-400">styleyourself@gmail.com &nbsp;</span>
          <span className="cursor-pointer hover:text-yellow-400">&nbsp; +234 912 717 0775</span>
        </div>

        <div className="flex gap-4 text-lg">
          <FaTwitter className="cursor-pointer hover:text-yellow-400" />
          <FaFacebook className="cursor-pointer hover:text-yellow-400" />
          <FaInstagram className="cursor-pointer hover:text-yellow-400" />
          <FaTiktok className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-amber-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="font-bold text-lg sm:text-xl cursor-pointer">
            StyleYourself
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 font-medium">
            <a className="hover:text-white cursor-pointer">Home</a>
            <a className="hover:text-white cursor-pointer" href="#About">About</a>
            <a className="hover:text-white cursor-pointer" href="#Collection">Collection</a>
            <a className="hover:text-white cursor-pointer" href="#Sale">Sale</a>
            <a className="hover:text-white cursor-pointer" href="#Reviews">Reviews</a>
            <a className="hover:text-white cursor-pointer" href="#Contact">Contact</a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center border-2 border-black rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm font-bold"
            />
            <FaSearch className="cursor-pointer"/>  
          </div>

          {/* Hamburger (Mobile) */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-5 pb-6 text-lg font-medium">

            <a className="hover:text-white cursor-pointer">Home</a>
            <a className="hover:text-white cursor-pointer" href="#About">About</a>
            <a className="hover:text-white cursor-pointer" href="#Collection">Collection</a>
            <a className="hover:text-white cursor-pointer" href="#Sale">Sale</a>
            <a className="hover:text-white cursor-pointer" href="#Reviews">Reviews</a>
            <a className="hover:text-white cursor-pointer" href="#Contact">Contact</a>

            {/* Mobile Search */}
            <div className="flex items-center border border-black rounded-full px-3 py-1 mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 text-sm"
              />
              <FaSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;