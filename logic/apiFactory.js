import axios from "axios"

export const APITimeout = 30000 // ms
export const internalAPI = '/api/server'

export const axiosClient = axios.create({
    timeout: APITimeout,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const axiosServer = axios;