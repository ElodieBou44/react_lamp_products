import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
