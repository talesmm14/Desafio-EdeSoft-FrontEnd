import React from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";

export function Products() {
    return (
        <div>
          <h1>Produtos</h1>
          <ProductList></ProductList>
          <Link to="/">Voltar</Link>
        </div>
      );
}