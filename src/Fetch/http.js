import axios from 'axios'

const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
    }
})

export default http