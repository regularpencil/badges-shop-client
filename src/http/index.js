import axios from "axios";

export const API_URL = `https://badges-shop-server.herokuapp.com/api`;

export const $api = axios.create({
    withCredentials: true,
    baseUrl: "https://badges-shop-server.herokuapp.com/api"
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
})

$api.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config;
    if(error.response.status === 401){
        const response = await axios.get("https://badges-shop-server.herokuapp.com/api/refresh", {withCredentials:true});
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
    }
})
