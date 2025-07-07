import React from "react";
import { ArrowUpDown, Camera, Filter, Search, Sparkles } from "lucide-react";
import { setSearchTerm, setSortBy } from "../../utils/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.filters.searchTerm);
  const sortBy = useSelector((store) => store.filters.sortBy);
  console.log(searchTerm, sortBy);
  return (
    <header className="sticky top-0 bg-white opacity-80 backdrop-blur-sm z-50 px-7 py-2 border-b border-gray-200">
      <div className="sm:grid grid-cols-2 py-2">
        <div className="flex items-center gap-3">
          <div className="inline-flex justify-center items-center p-2 bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-xl">
            <Camera />
          </div>
          <div className="flex flex-col w-full justify-center">
            <h1 className="w-fit text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Pixisphere
            </h1>
            <p className="text-sm text-gray-800">Find Perfect Photographers</p>
          </div>
        </div>
        <div className="hidden sm:inline-flex justify-end gap-2 items-center">
          <Sparkles className="text-purple-500" size={18} />
          <p className="text-sm text-gray-800">
            Featured Maternity Photographers in Bengaluru
          </p>
        </div>
      </div>
      <div className="relative grid grid-cols-[1fr_75px_1fr] gap-4 sm:grid-cols-[1fr_200px] py-2">
        <Search className="absolute top-6 left-3 text-gray-600" size={16} />
        <input
          type="text"
          name="search"
          className="border-2 border-purple-200 rounded w-full outline-offset-4 py-2 pl-10 pr-4 placeholder:text-gray-800 placeholder:text-sm"
          placeholder="Search photographers, locations or styles..."
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <div className="sm:hidden inline-flex justify-center border-2 border-purple-200 text-gray-800 rounded w-full outline-offset-4 py-2">
          <Filter width={18} />
        </div>
        <div className="relative">
          <ArrowUpDown
            size={20}
            className="absolute top-3 left-2 text-gray-800"
          />
          <select
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            className="border-2 border-purple-200 rounded w-full outline-offset-4 py-2 pl-8"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
