import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import ProductDetail from "./pages/products/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products/create" element={<ProductCreate />} />
        <Route path="/products/:productId/edit/:productId" element={<ProductCreate />} />
        <Route path="/products/:productId/delete" element={<ProductCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
