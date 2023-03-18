import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { deleteProductAsync, getProductById, selectProducts } from "../../../store/reducers/productSlice";
import { Container } from "./styles";

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = useAppSelector((state) => getProductById(state, productId));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function deleteProduct() {
    if (!product) return;
    const confirmed = window.confirm('Deseja deletar esse produto?');
    if (confirmed) {
      dispatch(deleteProductAsync(product.id)).then(() => {
        navigate(-1);
      });
    }
  }

  return (
    !product ?
      <p>Nenhum produto encontrado</p>
      :
      <Container>
        <div className="">
          <img className="img-view" src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <p className="category">{product.category}</p>
          <h2 className="title">{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">R${product.price}</p>
        </div>
        <div className="buttons">
          <Button onClick={() => { navigate(`edit`) }}>Editar</Button>
          <Button onClick={deleteProduct} color="red">Deletar</Button>
        </div>
      </Container>
  );
};

export default ProductDetail;