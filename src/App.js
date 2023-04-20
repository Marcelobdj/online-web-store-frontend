import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./components/common/HomePage";
import ProductList from "./components/user/ProductList";
import ProductDetails from "./components/user/ProductDetails";
import ShoppingCart from "./components/user/ShoppingCart";
import CheckoutForm from "./components/user/CheckoutForm";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import UserProfile from "./components/user/UserProfile";
import AdminPanel from "./components/admin/AdminPanel";
import { CartProvider } from "./context/CartContext";
import withAuthorization from "./components/common/withAuthorization";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes/theme';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <CartProvider>
      <Router>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <div className="App">
            <Navbar />
            <IconButton color="inherit" onClick={toggleDarkMode}>
              <Brightness4Icon />
            </IconButton>
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
        </ThemeProvider>
      </Router>
    </CartProvider>
  );
}

export default App;