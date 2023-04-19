import convertToImageFormat from '@/shared/lib/convertToImageFormat'
import axios from "axios"
import { onMounted, computed, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export const getPosts = () => {
  const store = useStore()
  const route = useRoute()


  const posts = ref([])
  const id = computed(() => route.params.id)
  const token = computed(() => store.state.token)

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/posts/users/${id.value}`, {
      headers: {
        Authorization: 'bearer ' + token.value
      }
    })
    posts.value = response.data
    posts.value.forEach((post) => post.image.data.data = convertToImageFormat(post.image.data.data))
  }

  onMounted(getData)

  return { posts }
}