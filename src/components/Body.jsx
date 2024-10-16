import React from 'react';
import { useNavigate } from "react-router";
import pexel from '../assets/pexels-tima-miroshnichenko-7034125.jpg';
import SearchEngine from './SearchEngine';
import Button from './Button';

function Body() {
  const nav = useNavigate();

  const handleShop = () => {
    nav('/buy');
  };

  return (
    <section
      className="flex flex-col items-center bg-cover bg-center h-screen mt-10"
      style={{ backgroundImage: `url(${pexel})` }}
    >
      <h1 className="text-white text-4xl font-bold mb-10 mt-10">Welcome to IBOZA Pharmacy</h1>
      <h2 className="text-black text-2xl mb-10 font-bold">Your Health, Our Priority</h2>
      <p className="text-black mb-6 text-xl">Browse a wide range of medications and health products.</p>
      {/* <a
        href="#products"
        className="btn bg-white text-black py-2 px-4 rounded hover:text-teal-300"
        onClick={handleShop}
      >
        Shop Now
      </a> */}
      <Button onClick={handleShop}>Shop Now</Button>
      <SearchEngine />
    </section>
  );
}

export default Body;
