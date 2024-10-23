import Hea from "./components/Hea";
import Body from "./components/Body";
import Phone from "./components/PhoneContact";
import Bout from "./components/BoutUs";
import Login from "./components/Login";
import Buy from "./components/Buy";
import MedicineDetail from "./components/MedicineDetail"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext"; // Import CartProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> {/* Wrap the whole app with AuthProvider */}
      <CartProvider> 
        <Hea />

        <Routes>
        <Route path="/cart" element={<Cart />} />
          <Route path="/body" element={<Body />}></Route>
          <Route path="/phone" element={<Phone />}></Route>
          <Route path="/bout" element={<Bout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/medicine/:id" element={<MedicineDetail />} />
        </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
