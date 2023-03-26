import axios from 'axios'
import { ref } from 'vue'
import { useStore } from 'vuex'

export const authorization = () => {
  const username = ref("")
  const password = ref("")
  const store = useStore()

  const authorize = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authorization/",
        {
          username: username.value,
          password: password.value,
        }
      );
      store.state.token = response.data.token;
      store.state.user = response.data.user;
    } catch (e) {
      console.log(e);
    }
  }
  return {
    username, password, authorize
  }
}
