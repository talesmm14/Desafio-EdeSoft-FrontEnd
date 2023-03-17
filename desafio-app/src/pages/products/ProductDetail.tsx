import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Product } from "../../models/product";
import api from "../../services/api";

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate()

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
      <Button onClick={() => { navigate(`edit/${product.id}`) }}>Editar</Button>
      <Button onClick={() => { navigate(`delete/${product.id}`) }} color="red">Deletar</Button>
      <Button onClick={() => { navigate(`products`) }} color="yellow">Deletar</Button>
    </div>
  );
};

export default ProductDetail;