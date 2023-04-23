import axios from "axios"
import { ref, onMounted, watch, computed } from "vue"
import { useStore } from "vuex"

export const getUser = () => {
  const user = ref({})
  const store = useStore()
  const id = computed(() => store.state.user.id)
  const token = computed(() => store.state.user.token)

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/users/${id.value}`, {
      headers: {
        Authorization: 'bearer ' + token.value
      }
    })
    user.value = response.data
  }
  onMounted(getData)
  watch(id, getData)
  
  return { user }
}