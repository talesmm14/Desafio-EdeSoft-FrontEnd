import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/hooks";
import { Product } from "../../../../models/product";
import { ProductService } from "../../../../services/ProductService";
import { addProductAsync, updateProductAsync } from "../../../../store/reducers/productSlice";
import { Container } from "./styles";


type ProductProps = {
    product?: Product | null;
}


export function ProductForm({ product: data }: ProductProps) {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState<Product>({
        id: 0,
        title: '',
        description: '',
        price: 0,
        category: '',
        image: ''
    });

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        if (data) {
            setProduct(data);
            setIsEditing(true);
        }
    }, [data])

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        dispatch(isEditing ? updateProductAsync(product) : addProductAsync(product))
            .then(()=>{
                navigate('/');
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
        <Container>
            {success && (
                <div className="alert-message success">
                    <p className="success" color="green">product {product?.title} criado com sucesso!!!</p>
                </div>
            )}
            {error && (
                <div className="alert-message error">
                    <p className="error">Não foi possivel cadastrar o {product?.title}!</p>
                </div>
            )}
            <form onSubmit={handleFormSubmit}>
                <label className="label-form" htmlFor="title">Título:</label>
                <input className="input-form" type="text" id="title" name="title" value={product.title} onChange={handleInputChange} required />

                <label className="label-form" htmlFor="description">Descrição:</label>
                <textarea className="input-form" id="description" name="description" value={product.description} onChange={handleInputChange} required />

                <label className="label-form" htmlFor="price">Preço:</label>
                <input className="input-form" type="number" id="price" name="price" value={product.price} onChange={handleInputChange} required />

                <label className="label-form" htmlFor="category">Categoria:</label>
                <input className="input-form" type="text" id="category" name="category" value={product.category} onChange={handleInputChange} required />

                <label className="label-form" htmlFor="image">Imagem:</label>
                <input className="input-form" type="text" id="image" name="image" value={product.image} onChange={handleInputChange} required />
                <br />
                <button className="button-form" type="submit">{isEditing ? 'Salvar produto' : 'Criar produto'}</button>
            </form>
        </Container>
    );
}