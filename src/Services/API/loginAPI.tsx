import axios from 'axios';
const BASE_URL = 'http://api.fakeshop-api.com';
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
});

