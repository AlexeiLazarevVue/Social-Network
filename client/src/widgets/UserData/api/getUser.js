import axios from "axios"

export const getUser = (id) => {
  const response = axios.get('http://localhost:5000/users/')
}