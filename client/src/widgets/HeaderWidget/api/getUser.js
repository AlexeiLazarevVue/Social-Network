import axios from "axios"
import { onMounted, ref } from "vue"
import { useStore } from "vuex"

export const getUser = () => {
  const user = ref('')
  const store = useStore()
  const getData = async () => {
    const id = store.getters.getCookie('id')
    const token = store.getters.getCookie('token')

    const response = await axios.get(`http://localhost:5000/api/users/${id}`, {
      headers: {
        Authorization: 'bearer ' + token
      }
    })
    user.value = response.data
  }

  onMounted(getData)
  
  return { user }
}