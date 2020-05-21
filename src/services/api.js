import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-raypay.herokuapp.com',
})

export default api;