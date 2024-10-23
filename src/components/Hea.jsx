import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchEngine from "./SearchEngine";
import Button from "./Button";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Hea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {times} = useContext(CartContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white p-4 shadow-md z-50">
      <div className="text-3xl font-bold text-teal-400">Online Pharmacy</div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-teal-400 focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <nav
        className={`flex-col md:flex md:flex-row ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex md:space-x-8`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-bold text-teal-400">
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
            <Link to="/login" className="hover:text-teal-300">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
      

      <div className="hidden md:block">
        <SearchEngine />
      </div>
      <Button onClick={() => navigate("/cart")}>Go to Cart <span className="text-red-400">{times}</span></Button>
    </header>
  );
}

export default Hea;
