<template>
  <div class="post-list">
    <Suspense>
      <post v-for="id in postsId" :key="id" :id="id._id"></post>
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

<style lang='less' scoped>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
