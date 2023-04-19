import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { CartProvider } from "./context/CartContext";
import ShoppingCart from "./components/ShoppingCart";
import ProductDetails from "./components/ProductDetails";
import withAuthorization from "./components/withAuthorization";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          {/* Wrap the main content with Switch */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route
              path="/admin"
              element={withAuthorization(AdminPanel, ["admin"])}
            />
            {/* Add more routes as you create the components */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;