import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { datas } from "./Pro1";
import Button from "./Button";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext"; // Make sure this is imported correctly

function Buy() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { addToCart} = useContext(CartContext); // Make sure addToCart is destructured from CartContext
  // const [times,setTimes] = useState(0)
  const handleCart = (product) => {
    // setTimes(prev => prev + 1);
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      addToCart(product); // Make sure you're calling addToCart here
      console.log("Product added to cart:", product);
    }
  };

  return (
    <section id="products" className="p-5 mt-24">
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
            <Button onClick={() => handleCart(product)}>Add to cart</Button>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Buy;
