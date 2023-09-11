<template>
  <action-menu-button @click="deletePost">Delete</action-menu-button>
</template>

<script>
import { deletingPost } from '../api/deletingPost'
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { deletePost } = deletingPost(props)

    return {
      deletePost
    }
  }
};
</script>

<style>
</style>