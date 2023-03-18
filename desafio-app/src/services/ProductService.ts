import { Product } from "../models/product";
import api from "./api";

export class ProductService {
    static async getAllProduct() {
        const { data } = await api.get<Product[]>(`products`);
        return data;
    }

    static async getProduct(productId: number) {
        const { data } = await api.get<Product>(`products/${productId}`);
        return data;
    }

    static async addProduct(product){
        const { data } = await api.post(`products`, product);
        return data;
    }

    static async updateProduct(productId, product){
        const { data } = await api.put(`products/${productId}`, product);
        return data;
    }

    static async deleteProduct(productId: number){
        const { data } = await api.delete(`products/${productId}`);
        return data;
    }

}