import { computed, onBeforeMount, ref } from "vue"
import { useStore } from 'vuex'
import axios from "axios"

export const updatingLikes = async (props) => {
  const store = useStore()
  const token = computed(() => store.state.user.id)
  const likesOwners = ref([])
  const likes = computed(() => likesOwners.value.length)

  const getLikesOwners = async () => {
    const response = await axios.get(`http://localhost:5000/api/posts/${props.id}`)
    return response.data.likesOwners
  }

  likesOwners.value = await getLikesOwners()

  const updateLikes = async () => {
    const userId = store.state.user.id

    if (!likesOwners.value.includes(userId)) {
      likesOwners.value.push(userId)
    } else {
      likesOwners.value.splice(likesOwners.value.indexOf(userId), 1)
    }

    const response = await axios.put(`http://localhost:5000/api/posts/${props.id}`,
      {
        likes: likes.value,
        likesOwners: likesOwners.value
      },
      {
        headers: {
          Authorization: token.value
        }
      })
  }

  return {
    updateLikes,
    getLikesOwners,
    likes,
    likesOwners
  }
}