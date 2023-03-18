import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import { NavBar } from "./components/NavBar";
import ProductDetail from "./pages/products/ProductDetail";
import { ProductEdit } from "./pages/products/ProductEdit";
import { useAppDispatch } from "./hooks/hooks";
import { fetchProductsAsync } from "./store/reducers/productSlice";
import Users from "./pages/users/Users";
import { fetchUsersAsync } from "./store/reducers/userSlice";
import { UserCreate } from "./pages/users/UserCreate";
import { UserDetail } from "./pages/users/UserDetail";
import { UserEdit } from "./pages/users/UserEdit";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchUsersAsync());
  }, []);


  return (
    <Router>
    <NavBar />
    <div style={{padding: '2rem'}}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products/create" element={<ProductCreate />} />
        <Route path="/products/:productId/edit" element={<ProductEdit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/:userId/edit" element={<UserEdit />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
