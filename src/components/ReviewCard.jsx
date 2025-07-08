import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ reviews  }) => {
  return (
    <div className="bg-white p-4 flex flex-col gap-4 rounded-lg border border-gray-300">
      <h3 className="font-semibold text-xl">Reviews</h3>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-800">{review.name}</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
