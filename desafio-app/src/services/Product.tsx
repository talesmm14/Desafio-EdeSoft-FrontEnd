import { Product } from "../models/product";
import api from "./api";

export class ProductService {
    static async getAll(){
        const { data } = await api.get<Product[]>(`products`);
        return data;
    }
}