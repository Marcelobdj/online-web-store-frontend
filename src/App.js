import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;