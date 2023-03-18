import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getProductById } from "../../store/reducers/productSlice";
import { ProductForm } from "./components/ProductForm";

export function ProductEdit() {

  const { productId } = useParams<{ productId: string }>();
  const product = useAppSelector((state) => getProductById(state, productId));


  return (
    <div>
      <ProductForm product={product}></ProductForm>
    </div>
  );
}