import axios from 'axios'
const jsonServerUrl = 'https://my-json-server.typicode.com/'
const andersonUrl = jsonServerUrl + 'andersonphiri/jsonmockserver/'
const touringVueRouterUrl = jsonServerUrl + 'Code-Pop/Touring-Vue-Router'
const apiClient = axios.create({
    baseURL: andersonUrl,
    withCredentials: false,
    headers: {
        Accept : "application/json",
        'Content-Type': 'application/json'
    }
})

const apiClientVueRouter = axios.create({
    baseURL: touringVueRouterUrl,
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
    },
    touringVueRouterGetEvents(limitPerPage, page) {
        return apiClientVueRouter.get('/events?_limit=' + limitPerPage + '&_page=' + page)
    },
    touringVueRouterGetEvent(id) {
        return apiClientVueRouter.get('/events/' + id)
    }
}