import React from "react";
import { Star, Phone, Mail } from "lucide-react";

const ContactCard = ({ photographer }) => {
  const { name, price, rating, location, specialties } = photographer;
  return (
    <div className="md:sticky top-1 bg-white p-6 rounded-lg border border-gray-300 flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-800">
        Book This Photographer
      </h3>

      <div className="flex justify-between text-sm text-gray-700">
        <div>
          <p className="font-medium">₹{price?.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Starting price</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-500 fill-yellow-500" size={16} />
          <span className="font-medium">{rating}</span>
        </div>
      </div>

      <div className="text-sm text-gray-700">
        <p className="font-medium">Location</p>
        <p>{location}</p>
      </div>

      <div className="text-sm text-gray-700">
        <p className="font-medium">Specialties</p>
        <p>{specialties?.length} styles</p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-semibold">
          Send Inquiry
        </button>
        <div className="flex gap-2">
          <button className="flex-1 border border-purple-300 text-purple-700 py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-medium">
            <Phone size={14} /> Call
          </button>
          <button className="flex-1 border border-purple-300 text-purple-700 py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-medium">
            <Mail size={14} /> Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
