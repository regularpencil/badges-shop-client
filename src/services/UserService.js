import { $api } from "../http";

export default class UserService {
    static async saveFavorites(email, favorites) {
        return $api.post("https://badges-shop-server.herokuapp.com/api/favorites", {email, favorites});
    }

    static async saveHistory(email, history) {
        return $api.post("https://badges-shop-server.herokuapp.com/api/history", {email, history});
    }

    static async saveOrders(email, orders) {
        return $api.post("https://badges-shop-server.herokuapp.com/api/orders", {email, orders});
    }

    static async saveUserSettings(email, phoneNumber, name) {
        return $api.post("https://badges-shop-server.herokuapp.com/api/settings", {email, phoneNumber, name});
    }
}

//http://localhost:4000