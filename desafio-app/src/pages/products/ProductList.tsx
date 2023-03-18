import { ProductCard } from "./components/ProductCard";
import { selectProducts } from "../../store/reducers/productSlice";
import { useAppSelector } from "../../hooks/hooks";

export function ProductList() {

  const products = useAppSelector(selectProducts);

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}