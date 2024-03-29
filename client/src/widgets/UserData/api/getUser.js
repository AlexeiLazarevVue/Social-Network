import axios from "axios"
import { computed, watch, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export const getUser = () => {
  const store = useStore()
  const route = useRoute()

  const user = ref('')
  const id = computed(() => route.params.id)
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