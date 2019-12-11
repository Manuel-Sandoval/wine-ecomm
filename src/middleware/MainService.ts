import axios from 'axios';

const mainAPI = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json'
});

export default mainAPI;