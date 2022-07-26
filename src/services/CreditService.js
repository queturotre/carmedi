import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/queturotre/carmedi',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCredits(){
    return apiClient.get('/credits')
  },
}

