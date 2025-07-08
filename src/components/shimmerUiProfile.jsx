import React from "react";

const ShimmerUiProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 space-y-6 animate-pulse">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <div className="h-36 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 relative overflow-hidden"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-16 rounded-full bg-gray-200"></div>
          <div className="h-6 w-16 rounded-full bg-gray-200"></div>
          <div className="h-6 w-16 rounded-full bg-gray-200"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          <div className="flex flex-wrap gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-[30vw] h-[30vw] sm:w-[15vw] sm:h-[15vw] lg:w-48 lg:h-48 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="h-9 bg-purple-200 rounded-lg"></div>
            <div className="flex gap-2 mt-2">
              <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUiProfile;
