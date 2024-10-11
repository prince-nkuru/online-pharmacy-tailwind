import React from "react";
import { Link } from "react-router-dom";
import SearchEngine from "./SearchEngine";
function Hea() {

  return (
    <header className=" flex items-center justify-between bg-green-600 p-4 shadow-md">
      <div className=" text-3xl font-bold text-gray-200">Online Pharmacy</div>
      {/* <div className="max-w-[400px] rounded-full">
        <input
          placeholder="search medicine "
          className="border-none outline-none px-14 py-3 min-w-full rounded-3xl"
        />
      </div> */}
       {/* <SearchEngine/> */}
      <nav>
        <ul className="flex space-x-8 font-bold text-gray-200">
          <li>
            <Link to="/body" className="hover:text-teal-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/buy" className="hover:text-teal-300">
              Product
            </Link>
          </li>
          <li>
            <Link to="/phone" className="hover:text-teal-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/bout" className="hover:text-teal-300">
              About us
            </Link>
          </li>
          <li>
            <Link to="/inlog" className="hover:text-teal-300">
              sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Hea;
