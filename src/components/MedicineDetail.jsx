import React from 'react';
import { useParams } from 'react-router-dom';
import { datas } from './Pro1'; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate

function MedicineDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const medicine = datas.find((med) => med.id === parseInt(id)); // Find the medicine
  const navigate = useNavigate();

  const handleNav = () =>{
    navigate('/inlog')
  }

  // If medicine is not found, you could show a 404 message or redirect
  if (!medicine) {
    return <p>Medicine not found.</p>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">{medicine.name}</h2>
      <img src={medicine.img} alt={medicine.name} className="w-32 h-32 rounded" />
      <p className="text-lg font-semibold">{medicine.price}</p>
      {/* Add more details if needed */}
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded" onClick={handleNav}>
        Add to Cart
      </button>
    </div>
  );
}

export default MedicineDetail;
