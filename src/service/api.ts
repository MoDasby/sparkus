import axios from 'axios';

export const api = axios.create({
    baseURL: "https://sparkus-backend.herokuapp.com/api",
});
