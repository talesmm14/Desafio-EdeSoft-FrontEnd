import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../models/product";
import api from "../services/api";

export function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get(`products/${productId}`)
    .then((response) => setProduct(response.data))
    .catch((err) => console.log(err))
  }, [productId])

  if (!product)
    return <div>Carregando Produto...</div>

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>R${product.price}</p>
      <p>Categoria: {product.category}</p>
    </div>
  );
};

export default ProductDetail;