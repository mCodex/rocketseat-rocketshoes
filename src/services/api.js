import axios from 'axios';

const api = axios.create({
    baseURL:
        'https://my-json-server.typicode.com/mcodex/rocketseat-rocketshoes/',
});

export default api;
