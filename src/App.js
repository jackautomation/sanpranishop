import React from "react";
import ToDo from "./components/ToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuPage from "./components/MenuPage";
import SareePage from "./pages/SareePage";
import BanglesPage from "./pages/BanglesPage";
import ChuditarPage from "./pages/ChuditarPage";
import JewelsPage from "./pages/JewelsPage";
import KurtaPage from "./pages/KurtaPage";
import NightClothesPage from "./pages/NightClothesPage";
import PaymentOptions from "./pages/PaymentOptions";
import PaymentGateway from "./pages/PaymentGateway";

function App() {
  return (
    <Router basename="/sanpranishop">
      <Routes>
        <Route path="/sanpranishop" element={<MenuPage />}/>
        <Route path="/saree" element={<SareePage />}/>
        <Route path="/kurta" element={<KurtaPage />}/>
        <Route path="/chuditar" element={<ChuditarPage />}/>
        <Route path="/bangle" element={<BanglesPage />}/>
        <Route path="/jewellery" element={<JewelsPage />}/>
        <Route path="/nightdress" element={<NightClothesPage />}/>
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/pay" element={<PaymentGateway />} />
        
      </Routes>
    </Router>
  )

}

export default App;