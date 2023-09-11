<template>
  <action-menu-button @click="setLikes">Like</action-menu-button>
</template>

<script>
import { updatingLikes } from '../api/updatingLikes'
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  async setup(props, {emit}) {
    const { updateLikes, getLikesOwners, likes, likesOwners } = await updatingLikes(props)

    const setLikes = () => {
      updateLikes()
      emit('like', likes.value);
    }

    return {
      updateLikes,
      getLikesOwners,
      likesOwners,
      likes,
      setLikes
    }
  }
};
</script>

<style>
</style>