<template>
  <div v-if="!isPostLoading" class="post">
    <div>{{ post.userId }}</div>
    <div>{{ post.content }}</div>
    <div>{{ post.date }}</div>
    <img
      :src="`data:${post.image.contentType};base64,${post.image.data.data}`"
      alt=""
      srcset="" />
  </div>
</template>

<script>
import { getPost } from '../api/getPost';
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const { post, isPostLoading } = getPost(props);
    console.log(post);

    return {
      post,
      isPostLoading,
    };
  },
};
</script>

<style lang="less" scoped>
img {
  height: 750px;
  min-width: 500px;
  max-width: 750px;
}
</style>
