import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../utils/filterSlice";

const RangeFilter = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((store) => store.filters.priceRange);
  return (
    <div className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-lg">
      <h3 className="font-semibold w-full py-2">Price Range</h3>
      <input
        type="range"
        min="0"
        max="20000"
        step="1000"
        value={priceRange}
        onChange={(e) => dispatch(setPriceRange(Number(e.target.value)))}
        className="w-full accent-gray-900 mask-auto"
      />
      <div className="grid grid-cols-2 w-full text-sm text-gray-600 py-2">
        <div className="text-start">₹0</div>
        <div className="text-end">₹{priceRange}</div>
      </div>
    </div>
  );
};

export default RangeFilter;
