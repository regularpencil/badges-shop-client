import { $api } from "../http";

export default class AuthService {
    static async login(email, password){
        return $api.post("https://badges-shop-server.herokuapp.com/api/login", {email, password});
    }

    static async registration(name, email, password, phoneNumber){
        return $api.post("https://badges-shop-server.herokuapp.com/api/registration", {name, email, password, phoneNumber});
    }

    static async logout(){
        return $api.post("https://badges-shop-server.herokuapp.com/api/logout");
    }
}