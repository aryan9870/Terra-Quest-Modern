import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden tracking-wider">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
