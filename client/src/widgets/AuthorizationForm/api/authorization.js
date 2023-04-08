import cookieController from '@/app/cookieController'
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
      const user = response.data

      store.state.id = user.id
      store.state.token = user.token

      for (let userKey in user) {
        const userValue = user[userKey]
        const payload = {
          key: userKey,
          value: userValue
        }
        cookieController.setCookie(payload)
      }
    } catch (e) {
      console.log(e);
    }
  }
  return {
    username, password, authorize
  }
}
