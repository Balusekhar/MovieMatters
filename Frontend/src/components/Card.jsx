// src/components/Card.jsx
import React from "react";

const Card = () => {
  return (
    <div className="relative w-72 h-80 me-4 mt-6 overflow-hidden rounded-lg shadow-lg group">
      <img
        src="https://pbs.twimg.com/media/GGjRuuobYAARbIb.jpg:large"
        alt="John Wick: Chapter 4"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="text-white">
          <h3 className="text-lg font-bold">John Wick: Chapter 4</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm">Release Date: March 24, 2023</p>
            <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold text-green-900 bg-green-300 rounded-full">
              7.1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
