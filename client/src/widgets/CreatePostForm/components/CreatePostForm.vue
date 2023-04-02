<template>
  <form>
    <input
      v-model="title"
      @input="title = $event.target.value"
      type="text"
    />
    <input
      v-model="content"
      @input="content = $event.target.value"
      type="text"
    />
    <input
      @change="setImage"
      type="file"
    />
    <button @click.prevent="createPost()" type="submit">SignUp</button>
  </form>
</template>

<script>
import { creatingPost } from "../api/creatingPost";
export default {
  setup(props) {
    const {
      title,
      content,
      setImage,
      createPost,
    } = creatingPost();

    return {
      title,
      content,
      setImage,
      createPost,
    };
  },
};
</script>

<style lang="less">
</style>
