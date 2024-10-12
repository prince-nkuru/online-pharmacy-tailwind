import Hea from "./components/Hea";
import Body from "./components/Body";
import Phone from "./components/PhoneContact";
import Bout from "./components/BoutUs";
import InLog from "./components/InLog";
import Buy from "./components/Buy";
import MedicineDetail from "./components/MedicineDetail"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hea />

        <Routes>
          <Route path="/body" element={<Body />}></Route>
          <Route path="/phone" element={<Phone />}></Route>
          <Route path="/bout" element={<Bout />}></Route>
          <Route path="inlog" element={<InLog />}></Route>
          <Route path="buy" element={<Buy />}></Route>
          <Route path="/medicine/:id" element={<MedicineDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
