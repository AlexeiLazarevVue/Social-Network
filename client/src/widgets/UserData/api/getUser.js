import axios from "axios"
import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"

export const getUser = () => {
  const user = ref('')
  const store = useStore()
  const getData = async () => {
    const id = store.getters.getCookie('id')
    const token = store.getters.getCookie('token')
    console.log(token);
    const response = await axios.get(`http://localhost:5000/api/users/${id}`, {
      headers: {
        Authorization: 'bearer ' + token
      }
    })
    console.log(response.data);
    user.value = response.data
  }

  onMounted(getData)

  return { user }
}