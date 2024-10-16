import React from "react";
import { useNavigate } from "react-router";
import { datas } from "./Pro1";
import Button from "./Button";

function Buy() {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/inlog");
  };

  return (
    <section id="products" className="p-5 mt-12">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {datas.map((product) => (
          <div
            key={product.id}
            className="p-5 border-2 border-gray-300 text-center rounded-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-48 h-48 object-cover mb-3 rounded-2xl"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-md text-gray-700">{product.price}</p>
            {/* <button
              onClick={handleCart}
              className="mt-2 bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-600 focus:outline-none"
            >
              Add to Cart
            </button> */}
            <Button onClick={handleCart}>Add to cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Buy;
