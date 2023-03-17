import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import api from "../../services/api";

function ProductCreate() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [produto, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.post('products', produto)
      .then((response: { data: any; }) => {
        setSuccess(true);
        console.log(response.data);
      })
      .catch((err: any) => {
        setError(true);
        console.log(err);
      });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProduct((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
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
      {success && (
        <p>Produto {produto?.title} criado com sucesso!</p>
      )}
      {error && (
        <p>Não foi possivel cadastrar o {produto?.title}!</p>
      )}
      <Link to={`/products`}>Voltar</Link>
    </div>
  );
}

export default ProductCreate;