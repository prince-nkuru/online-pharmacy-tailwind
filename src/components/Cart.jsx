// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// function Cart() {
//   const { cartItems, removeItem } = useContext(CartContext);

//   return (
//     <section className="p-5 mt-12">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cartItems.length > 0 ? (
//           cartItems.map((item, index) => (
//             <div
//               key={item.id} // Use item.id as the key for unique products
//               className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform scale-90"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-32 h-32 object-cover mx-auto"
//               />
//               <div className="p-2 text-center">
//                 <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
//                 <p className="text-sm text-gray-700 mb-2">{item.price}</p>
//                 <p className="text-sm text-gray-700 mb-2">
//                   Quantity: {item.quantity}
//                 </p>{" "}
//                 {/* Display quantity */}
//                 <button
//                   onClick={() => removeItem(index)}
//                   className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300 text-xs"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="flex flex-row justify-center items-center">
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Cart;


import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeItem, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <section className="p-5 mt-12">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform scale-90"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-cover mx-auto"
              />
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{item.price}</p>
                <div className="text-sm text-gray-700 mb-2">
                  <span>Quantity: {item.quantity}</span>
                  <div className="flex justify-center space-x-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition-colors duration-300"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-row justify-center items-center">
            <p className="text-center text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
