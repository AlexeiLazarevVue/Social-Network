import axios from 'axios'
import { ref } from 'vue'

export const authorization = () => {
  const username = ref("")
  const password = ref("")

  const authorize = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authorization/",
        {
          username: username.value,
          password: password.value,
        }
      );
      localStorage.setItem("token", response.data.token)
    } catch (e) {
      console.log(e);
    }
  }
  return {
    username, password, authorize
  }
}
