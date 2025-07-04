import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1:5000'
})

export const axiosPrivate = axios.create({
    withCredentials: true,
    headers: {
        "X-CSRF-TOKEN": document.cookie.match(/csrf_access_token=([^;]+)/)?.[1],
    }
});