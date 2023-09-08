<template>
  <div v-if="!isPostLoading" class="post">
    <p>{{ post.userId }}</p>
    <p>{{ post.content }}</p>
    <p>{{ post.date }}</p>
    <h2>{{post.likes}}</h2>
    <img
      class="post__image"
      :src="`data:${post.image.contentType};base64,${post.image.data.data}`"
      alt=""
      srcset=""
    />
    <delete-button :id='id'></delete-button>
    <Suspense>
    <like-button :id="id" :likes='post.likes' @like="setLikes"></like-button>
    </Suspense>
  </div>
</template>

<script>
import DeleteButton from '@/features/DeleteButton'
import LikeButton from '@/features/LikeButton'
import { getPost } from "../api/getPost";
export default {
  components: { DeleteButton, LikeButton },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const { post, isPostLoading, getData } = getPost(props);

    const setLikes = (likes) => {
      post.value.likes = likes
    }

    return {
      post,
      isPostLoading,
      getData,
      setLikes
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
