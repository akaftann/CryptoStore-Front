import axios from 'axios'

export const BASE_URL = 'http://localhost:3000/api'

const $api = axios.create({
    withCredentials:true,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api