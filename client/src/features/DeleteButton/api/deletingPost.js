import { computed } from "vue"
import { useStore } from 'vuex'
import axios from "axios"

export const deletingPost = (props) => {
  const store = useStore()
  const token = computed(() => store.state.user.id)
  const deletePost = async () => {
    if (props.id) {
      const response = await axios.delete(`http://localhost:5000/api/posts/${props.id}`, {
        headers: {
          Authorization: token.value
        }
      })
    }
  }

  return {
    deletePost
  }
}