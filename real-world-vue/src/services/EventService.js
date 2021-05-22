import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/andersonphiri/jsonmockserver/',
    withCredentials: false,
    headers: {
        Accept : "application/json",
        'Content-Type': 'application/json'
    }
})
// events

export default {
    getEvents() {
        return apiClient.get('/events')
    }
    ,
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}