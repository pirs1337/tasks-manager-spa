import axios from "axios";

let token = localStorage.getItem('token');

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {'Authorization': 'Bearer '+ token}
})