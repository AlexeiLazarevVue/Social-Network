<template>
  <Suspense>
    <user-data></user-data>
  </Suspense>
  <create-post-form></create-post-form>
  <Suspense>
    <post-list></post-list>
  </Suspense>
</template>

<script>
import UserData from "@/widgets/UserData/";
import CreatePostForm from '@/widgets/CreatePostForm/';
import PostList from '@/widgets/PostList/';

export default {
  components: { UserData, CreatePostForm, PostList },
};
</script>

<style lang="less" scoped>

</style>