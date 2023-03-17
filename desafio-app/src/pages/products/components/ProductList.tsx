import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../models/product";
import { ProductService } from "../../../services/Product";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const data = await ProductService.getAll();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Link to={"/products/create"}>Add Produto</Link>
      <br></br>
      <Link to={"/"}>Voltar para pagina principal</Link>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}