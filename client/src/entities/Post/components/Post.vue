<template>
  <div v-if="!isPostLoading" class="post">
    <p>{{ post.userId }}</p>
    <p>{{ post.content }}</p>
    <p>{{ post.date }}</p>
    <img
      class="post__image"
      :src="`data:${post.image.contentType};base64,${post.image.data.data}`"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
import { getPost } from "../api/getPost";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const { post, isPostLoading } = getPost(props);

    return {
      post,
      isPostLoading,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/app/styles/main.less";
.post {
  padding: 40px;
  border-radius: 25px;
  background: @primary;
  box-shadow: 0 0 86px 86px #0000001f;
  &__image {
    height: 750px;
    min-width: 500px;
    max-width: 750px;
  }
}
</style>
