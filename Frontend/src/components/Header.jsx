import React from "react";

const Header = () => {
  return (
    <header className="bg-black shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-gray-300">
            Movie Matters
          </span>
        </div>
        <nav className="flex space-x-6">
          <a
            href="#home"
            className="text-gray-200 hover:text-[#C33B3B] hover:underline"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-200 hover:text-[#C33B3B] hover:underline"
          >
            Trending
          </a>
          <a
            href="#services"
            className="text-gray-200 hover:text-[#C33B3B] hover:underline"
          >
            Upcoming
          </a>
          <a
            href="#contact"
            className="text-gray-200 hover:text-[#C33B3B] hover:underline"
          >
            Watchlist
          </a>
        </nav>
        <div>
          <a
            className="text-gray-200 hover:text-[#c33B3B] pe-4 font-medium"
            href="#"
          >
            Sign Up
          </a>
          <button className="bg-[#C33B3B] text-white px-8 py-2 rounded">
            login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
