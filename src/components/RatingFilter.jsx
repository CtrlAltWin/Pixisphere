import React from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setMinRating } from "../../utils/filterSlice";
const RatingFilter = () => {
  const dispatch = useDispatch();
  const minRating = useSelector((store) => store.filters.minRating);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Minimum Rating
      </h3>
      <div className="flex flex-col gap-2">
        {[4, 3, 2, 1, 0].map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 cursor-pointer text-gray-700"
          >
            <input
              type="radio"
              name="rating"
              checked={rating === minRating}
              onChange={(e) => dispatch(setMinRating(rating))}
              className="accent-blue-500"
            />
            {rating > 0 ? (
              <span className="flex items-center gap-1">
                {rating}
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm text-gray-500">& above</span>
              </span>
            ) : (
              <span className="text-sm text-gray-600">All Ratings</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
