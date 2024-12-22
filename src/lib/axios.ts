import { showToast } from "@/util/toast";
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.18.14:3001",
    timeout: 5000
});

type ResponseError = {
    statusCode: number;
    message: string
}

api.interceptors.response.use(
    response => response,
    error => {

        const statusCode = error.response?.data?.statusCode || 0;
        const message = error.response?.data?.message || 'An unexpected error occurred';

        if (statusCode === 404) {
            showToast({ type: "warning", message: message });
        }else if(statusCode === 401){
            showToast({ type: "warning", message: message });
        }
        return Promise.reject(error);
    }
);

export default api;