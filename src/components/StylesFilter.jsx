import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedStyle,
  removeUnselectedStyle,
} from "../../utils/filterSlice";

const StylesFilter = () => {
  const dispatch = useDispatch();
  const selectedStyles = useSelector((store) => store.filters.selectedStyles);
  const styles = [
    "Outdoor",
    "Studio",
    "Candid",
    "Indoor",
    "Traditional",
    "Artistic",
  ];

  return (
    <div className="bg-white p-4 rounded-lg  border border-gray-300">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Photography Styles
      </h3>
      <div className="flex flex-col gap-2 text-gray-700">
        {styles.map((style, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedStyles.includes(style)}
              className="accent-gray-800"
              onChange={(e) => {
                e.target.checked
                  ? dispatch(addSelectedStyle(style))
                  : dispatch(removeUnselectedStyle(style));
              }}
            />
            <span>{style}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StylesFilter;
