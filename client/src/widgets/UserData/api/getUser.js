import axios from "axios"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export const getUser = () => {
  const user = ref('')
  const store = useStore()
  const route = useRoute()
  const getData = async () => {
    const id = route.params.id
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