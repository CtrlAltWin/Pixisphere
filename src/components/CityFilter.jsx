import React from "react";
import { setSelectedCity } from "../../utils/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const CityFilter = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((store) => store.filters.selectedCity);
  return (
    <div className="mb-4 border border-gray-300 p-4 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-2">City</h3>
      <select
        value={selectedCity}
        onChange={(e) => dispatch(setSelectedCity(e.target.value))}
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
      >
        <option value="">All Cities</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
      </select>
    </div>
  );
};

export default CityFilter;
