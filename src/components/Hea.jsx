import React, {useState} from "react";
import { Link } from "react-router-dom";
import SearchEngine from "./SearchEngine";
function Hea() {
  // const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 flex items-center justify-between bg-green-600 p-4 shadow-md z-50">
      <div className=" text-3xl font-bold text-gray-200">Online Pharmacy</div>
      
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
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { SearchEngine } from "./SearchEngine"; // Ensure this is a named import

// function Hea() {
//   const [searchResultsVisible, setSearchResultsVisible] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const navigate = useNavigate();

//   const handleResultClick = (id) => {
//     navigate(`/medicine/${id}`);
//     setSearchResultsVisible(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-green-600 p-4 shadow-md z-50 h-16">
//       <div className="text-3xl font-bold text-gray-200">Online Pharmacy</div>
//       <nav>
//         <ul className="flex space-x-8 font-bold text-gray-200">
//           <li>
//             <Link to="/body" className="hover:text-teal-300">Home</Link>
//           </li>
//           <li>
//             <Link to="/buy" className="hover:text-teal-300">Product</Link>
//           </li>
//           <li>
//             <Link to="/phone" className="hover:text-teal-300">Contact</Link>
//           </li>
//           <li>
//             <Link to="/bout" className="hover:text-teal-300">About us</Link>
//           </li>
//           <li>
//             <Link to="/inlog" className="hover:text-teal-300">Sign in</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="relative">
//         <SearchEngine 
//           setSearchResultsVisible={setSearchResultsVisible} 
//           setSearchResults={setSearchResults}
//         />
//         {searchResultsVisible && (
//           <div className="absolute top-16 left-0 right-0 bg-white bg-opacity-90 z-50 max-h-60 overflow-auto shadow-lg">
//             <ul>
//               {searchResults.map((medicine) => (
//                 <li 
//                   key={medicine.id} 
//                   className="flex items-center mb-3 border p-2 rounded cursor-pointer"
//                   onClick={() => handleResultClick(medicine.id)} // Handle click
//                 >
//                   <img src={medicine.img} alt={medicine.name} className="w-16 h-16 mr-3 rounded" />
//                   <div>
//                     <h3 className="font-semibold">{medicine.name}</h3>
//                     <p className="text-gray-700">{medicine.price}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Hea;

