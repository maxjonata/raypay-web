import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-raypay.herokuapp.com/compra_do_qr',
})

export default api;