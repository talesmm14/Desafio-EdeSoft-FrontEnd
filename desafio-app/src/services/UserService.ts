import { User } from "../models/user";
import api from "./api";

export class UserService {
    static async getAllUsers() {
        const { data } = await api.get<User[]>(`users`);
        return data;
    }

    static async getUser(userId: number) {
        const { data } = await api.get<User>(`users/${userId}`);
        return data;
    }

    static async addUser(user){
        const { data } = await api.post(`users`, user);
        return data;
    }

    static async updateUser(userId, user){
        const { data } = await api.put(`users/${userId}`, user);
        return data;
    }

    static async deleteUser(userId: number){
        const { data } = await api.delete(`users/${userId}`);
        return data;
    }
}