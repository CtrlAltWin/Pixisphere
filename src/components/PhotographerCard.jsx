import React from "react";

const PhotographerCard = ({ photographer, onViewProfile }) => {
  const { name, location, rating, price, styles, tags, profilePic } =
    photographer;

  const displayTags =
    tags.length > 2
      ? tags.slice(0, 2).join(", ") + ` +${tags.length - 2} more`
      : tags.join(", ");

  return (
    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-xl transition duration-300">
      <img src={profilePic} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center gap-2 text-sm text-purple-700 font-medium">
          <span>{rating} ★</span>
          <span>₹{price.toLocaleString()} onwards</span>
        </div>
        <div className="flex flex-wrap gap-1 text-xs text-gray-700">
          {styles.map((style, idx) => (
            <span
              key={idx}
              className="bg-purple-50 px-2 py-1 rounded-full border border-purple-200"
            >
              {style}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 italic">{displayTags}</div>
        <button
          onClick={onViewProfile}
          className="mt-3 py-2 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-101 duration-400 transition-transform ease-out"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PhotographerCard;
