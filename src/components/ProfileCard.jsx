import { MapPin, Star, Tag } from "lucide-react";
import React from "react";

const ProfileCard = ({ photographer }) => {
  const { name, location, rating, profilePic, tags, styles } = photographer;
  return (
    <div className="rounded-lg border border-gray-300">
      <div className="relative h-64 bg-gradient-to-r from-purple-600 to bg-pink-600 rounded-t-lg">
        <div className="absolute bottom-6 left-5 text-white space-y-1">
          <h2 className="font-bold text-3xl">{name}</h2>
          <div className="flex gap-2 text-lg items-center">
            <div className="inline-flex items-center gap-1">
              {" "}
              <MapPin width={16} />
              <p>{location}</p>
            </div>
            <div className="inline-flex items-center gap-1">
              {" "}
              <Star width={16} className="fill-yellow-500 text-yellow-500" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-4">
          <img
            src={profilePic}
            alt="profile"
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
          />
        </div>
      </div>

      <div className="bg-white p-4 space-y-2 rounded-b-lg">
        <div className="inline-flex flex-wrap gap-4 text-xs">
          {tags.map((tag, index) => (
            <div key={index} className="bg-purple-200 text-purple-600 px-2 py-1 rounded-full">
              {tag}
            </div>
          ))}
          {styles.map((style, index) => (
            <div key={index} className="border inline-flex items-center gap-1 border-pink-300 text-pink-700 px-2 rounded-full">
              <Tag width={14} />
              <span>{style}</span>
            </div>
          ))}
        </div>
        <div className="inline-flex flex-wrap text-black">
          <p className="text-gray-700 leading-relaxed">{photographer.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
