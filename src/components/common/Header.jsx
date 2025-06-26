import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <Link to="/">
        <h1 className="text-3xl text-orange-100 italic font-bold">
          LinkShortener
        </h1>
      </Link>
      <ul className="flex gap-4 text-md text-orange-100 font-semibold ">
        <li>
          <Link
            to="/"
            className="hover:text-shadow-amber-100 hover:text-shadow-sm transition-all duration-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-shadow-amber-100 hover:text-shadow-sm transition-all duration-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="bg-orange-100 hover:bg-red-600 text-red-600 hover:text-orange-100 px-4 py-1.5 rounded-md border-2 border-orange-100 transition duration-300"
          >
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
