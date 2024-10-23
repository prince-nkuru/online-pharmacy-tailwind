import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { datas } from './Pro1'; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from './AuthContext';
import { CartContext } from './CartContext';
import Button from './Button';

function MedicineDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const medicine = datas.find((med) => med.id === parseInt(id)); // Find the medicine
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const handleNav = () =>{
    if (!isLoggedIn){
      navigate('/login')
    } else {
    addToCart(medicine);
    }
   
  }

  // If medicine is not found, you could show a 404 message or redirect
  if (!medicine) {
    return <p>Medicine not found.</p>;
  }

  return (
    <div className="p-5 mt-28">
      <h2 className="text-2xl font-bold">{medicine.name}</h2>
      <img src={medicine.img} alt={medicine.name} className="w-32 h-32 rounded" />
      <p className="text-lg font-semibold">{medicine.price}</p>
      {/* Add more details if needed */}
      {/* <button className="mt-4 mb-4 bg-slate-900 text-white font-bold py-2 px-4 rounded hover:bg-teal-400" onClick={handleNav}>
        Add to Cart
      </button> */}
      <Button onClick={handleNav}>Add to cart</Button>
      <Button onClick={() => navigate("/cart")}>Go to Cart</Button>
    </div>
  );
}

export default MedicineDetail;
