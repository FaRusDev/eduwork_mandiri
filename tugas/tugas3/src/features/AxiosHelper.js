import axios from 'axios'

export default axios.create({
    baseURL:'https://638ea1c39cbdb0dbe311265e.mockapi.io/api',
    headers:{
        "Content-type" : "application/json"
    }
})