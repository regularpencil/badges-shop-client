import { $api } from "../http";

export default class UserService {
    static async saveFavorites(email, favorites) {
        return $api.post("http://localhost:4000/api/favorites", {email, favorites});
    }

    static async saveHistory(email, history) {
        return $api.post("http://localhost:4000/api/history", {email, history});
    }

    static async saveOrders(email, orders) {
        return $api.post("http://localhost:4000/api/orders", {email, orders});
    }

    static async saveUserSettings(email, phoneNumber, name) {
        return $api.post("http://localhost:4000/api/settings", {email, phoneNumber, name});
    }
}