import React from "react";

const FlowerCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="px-6 py-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="px-6 pt-2 pb-4 flex flex-wrap gap-2">
        <div className="h-6 bg-gray-300 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 rounded-full w-12"></div>
      </div>

      <div className="px-6 pb-4">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default FlowerCardSkeleton;
