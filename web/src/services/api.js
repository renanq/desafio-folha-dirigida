import axios from 'axios';

const api = axios.create({
    //endereço onde estão rodando as APIs de Backend
    baseURL: 'http://localhost:3333'
});

export default api;