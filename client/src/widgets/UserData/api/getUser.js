import axios from "axios"
import { computed, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export const getUser = () => {
  const store = useStore()
  const route = useRoute()

  const user = ref('')
  const id = route.params.id
  const token = computed(() => store.state.token)

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`, {
      headers: {
        Authorization: 'bearer ' + token.value
      }
    })
    user.value = response.data
  }

  onMounted(getData)

  return { user }
}