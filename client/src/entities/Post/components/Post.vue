<template>
  <div v-if="!isPostLoading" class="post">
    <div class="post__top">
      <div class="author">
        <img src="../../../assets/User.png" class="author__logo" alt="" />
        <h3 class="author__username">{{ post.userId }}</h3>
      </div>
    </div>
    <img
      class="post__image"
      :src="`data:${post.image.contentType};base64,${post.image.data.data}`"
      alt=""
      srcset=""
    />
    <div class="post__bottom">
      <div class="details">
        <h3 class="details">Likes: {{ post.likes }}</h3>
        <h3 class="details__date">
          {{ post.date }}
        </h3>
      </div>
      <div class="description">
        <p class="description__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
          perferendis distinctio.
        </p>
      </div>
    </div>
    <div class="post__action-menu">
      <div class="post__action-buttons">
        <Suspense>
        <like-button
          :id="id"
          :likes="post.likes"
          @like="setLikes"
        ></like-button>
      </Suspense>
      <delete-button :id="id"></delete-button>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteButton from "@/features/DeleteButton";
import LikeButton from "@/features/LikeButton";
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
      post.value.likes = likes;
    };

    return {
      post,
      isPostLoading,
      getData,
      setLikes,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/app/styles/main.less";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
.post {
  margin: 40px;
  width: 675px;
  border-radius: 20px;
  background: @primary;
  box-shadow: 0 0 86px 86px #00000025;
  overflow: hidden;
  &__top {
    .author {
      display: flex;
      gap: 10px;
      padding: 10px;
      &__logo {
        height: 25px;
        width: 25px;
        border-radius: 100%;
      }
      &__username {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  &__image {
    height: 560px;
    width: 100%;
    object-fit: cover;
  }
  &__bottom {
    padding: 15px;
    .details {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      &__likes {
        font-size: 15px;
        font-weight: 600;
      }
      &__date {
        color: #9a9a9a;
        font-size: 15px;
        font-weight: 600;
      }
    }
    .description {
      padding: 15px 0;
      font-weight: 400;
    }
  }
  &__action-buttons {
    width: fit-content;
    border-radius: 0 5px 0 0;
    overflow: hidden;
  }
}
</style>
