import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../../../models/product";
import { Container } from "./styles";


interface ProductCardProps {
    product: Product
}


export function ProductCard({ product }: ProductCardProps) {

    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/products/${product.id}`)}>
            <img src={product.image} alt={product.title} />
            <p className="card-category">{product.category}</p>
            <div className="card-body">
                <div className="card-body-left">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="card-body-right">
                    <p className="card-price">R${product.price}</p>
                </div>
            </div>
        </Container>
    );
}