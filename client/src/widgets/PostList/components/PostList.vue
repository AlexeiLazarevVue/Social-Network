<template>
  <div v-for="post in posts" :key="post._id">
    <div>{{ post._id }}</div>
    <div>{{ post.userId }}</div>
    <div>{{ post.title }}</div>
    <div>{{ post.content }}</div>
    <div>{{ post.date }}</div>
    <img v-if="post.image.data.data"
      :src="`data:${post.image.contentType};base64,${post.image.data.data}`"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
import { getPosts } from "../api/getPosts";

export default {
  async setup(props) {
    const { posts } = getPosts();
    return {
      posts,
    };
  },
};
</script>

<style>
</style>