import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// index.js or App.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={<Navigate to="/products/All" replace />}
          />
          {/* Subroutes under /products */}
          <Route path="/products/:productChar" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
