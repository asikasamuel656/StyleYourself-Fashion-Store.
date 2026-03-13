import { FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full text-white">
            <div className="text-sm bg-amber-700 flex p-0.9 text-center items-center">
                 <span className="hover:text-black ease-in cursor-pointer">www.Bella-fashion-store</span>
                <span className="ml-10 hover:text-black ease-in cursor-pointer">+234 9026 6033 35</span>
                <div className="flex justify-between ml-100 gap-8 items-center text-center">
                    <span className="flex gap-1.5"><FaUser/>My Account</span>
                    <span className="flex gap-1.5"><FaHeart/>My Wishlist</span>
                    <select name="" id="" className="text-white">
                        <option value="" disabled className="text-black">English</option>
                        <option value="" className="text-black">Spanish</option>
                        <option value="" className="text-black">French</option>
                    </select>
                    <span className="flex gap-1.5"><FaUser/>My account</span>

                </div>
            </div>
            <div className="block bg-amber-400 p-5 items-center justify-center shadow-xl">
                <div className="flex items-center justify-center gap-9 mr-100">
                    <span className="ml-60 font-bold text-xl cursor-pointer">Bella's</span>
                    <div className="gap-9 ml-50 flex">
                            <span>Home</span>
                            <span>Shop</span>
                            <span>Collection</span>
                            <span>Blog</span>
                            <span>Sale</span>
                            <span>Contact</span>
                    </div>
                   
                    <div className="relative w-72">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full h-10 rounded-full border-2 border-black pl-4 pr-10 outline-none h-5 ml-30 rounded-full p-4 border-black border-2 outline-0 shad"
                        />

                        <FaSearch className="absolute ml-67 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer hover:shadow-2xl" />
                    </div>
                </div>     
            </div>
        </div>
    )
};
export default Navbar;