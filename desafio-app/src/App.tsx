import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProductCreate } from "./components/ProductCreate";
import ProductDetail from "./components/ProductDetail";
import { Home } from "./pages/Home";
import { Products } from "./pages/Product";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/products/create" element={<ProductCreate />} />
      <Route path="/products/:productId/edit" element={<ProductCreate />} />
      <Route path="/products/:productId/delete" element={<ProductCreate />} />
    </Routes>
  </Router>
  );
}

export default App;
