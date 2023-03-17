import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import api from "../../services/api";

export function ProductEdit() {
  
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get(`products/${productId}`)
    .then((response: { data: any; }) => setProduct(response.data))
    .catch((err: any) => console.log(err))
  }, [productId])

  if (!product)
    return <div>Carregando Produto...</div>

  return (
    <div>
    </div>
  );
}