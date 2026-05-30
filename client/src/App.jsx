import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Cources from "./pages/Cources";


const App = () => {
  return (
    <div className="overflow-x-hidden tracking-wider">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cources" element={<Cources />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
