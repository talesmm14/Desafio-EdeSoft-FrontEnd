import { Link } from "react-router-dom";
import { Product } from "../../../models/product";


interface ProductCardProps {
    product: Product
}


export function ProductCard({ product }:ProductCardProps) {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="card">
                <img src={product.image} alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                </div>
            </div>
        </Link>
    );
}