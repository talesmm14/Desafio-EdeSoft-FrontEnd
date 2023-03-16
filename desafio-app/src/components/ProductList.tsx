import React, { useState, useEffect } from "react";
import { Product } from "../models/product";
import api from "../services/api";
import { ProductCard } from "./ProductCard";

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      api.get<Product[]>("products")
        .then((response) => {
        setProducts(response.data);
      });
    }, []);
  
    return (
      <div>
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
    );
  }