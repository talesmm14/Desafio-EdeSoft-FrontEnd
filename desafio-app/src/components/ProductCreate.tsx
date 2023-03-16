import { useState } from "react";
import { Product } from "../models/product";

export function ProductCreate() {

  const [produto, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" value={produto.title} onChange={handleInputChange} required />

      <label htmlFor="description">Descrição:</label>
      <textarea id="description" name="description" value={produto.description} onChange={handleInputChange} required />

      <label htmlFor="price">Preço:</label>
      <input type="number" id="price" name="price" value={produto.price} onChange={handleInputChange} required />

      <label htmlFor="category">Categoria:</label>
      <input type="text" id="category" name="category" value={produto.category} onChange={handleInputChange} required />

      <label htmlFor="image">Imagem:</label>
      <input type="text" id="image" name="image" value={produto.image} onChange={handleInputChange} required />

      <button type="submit">Criar Produto</button>
    </form>
  );
}