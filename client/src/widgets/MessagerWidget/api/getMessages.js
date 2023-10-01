import axios from "axios"

const getMessages = () => {
  const getMessagesList = async () => {
    const response = await axios.get('http://localhost:5000/api/messages')
  }
}