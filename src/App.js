import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import CartItem from "./components/CartItem";
import CheckoutForm from "./components/CheckoutForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import AdminPanel from "./components/AdminPanel";
import { CartProvider } from "./context/CartContext";
import withAuthorization from "./components/withAuthorization";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          {/* Wrap the main content with Switch */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<UserProfile />} />
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