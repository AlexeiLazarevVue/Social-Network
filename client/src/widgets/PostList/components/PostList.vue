<template>
  <div v-for="id in postsId" :key="id">
    <Suspense>
      <post :id="id._id"></post>
    </Suspense>
  </div>
</template>

<script>
import Post from '@/entities/Post';
import { getPosts } from '../api/getPosts';

export default {
  components: { Post },
  async setup(props) {
    const { postsId } = getPosts();
    return {
      postsId,
    };
  },
};
</script>

<style></style>
