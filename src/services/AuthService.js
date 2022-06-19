import { $api } from "../http";

export default class AuthService {
    static async login(email, password){
        return $api.post("http://localhost:4000/api/login", {email, password});
    }

    static async registration(name, email, password, phoneNumber){
        return $api.post("http://localhost:4000/api/registration", {name, email, password, phoneNumber});
    }

    static async logout(){
        return $api.post("http://localhost:4000/api/logout");
    }
}