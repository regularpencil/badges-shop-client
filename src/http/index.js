import axios from "axios";

export const API_URL = `http://localhost:4000/api`;

export const $api = axios.create({
    withCredentials: true,
    baseUrl: "http://localhost:4000/api"
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
        const response = await axios.get("http://localhost:4000/api/refresh", {withCredentials:true});
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
    }
})
