<template>
  <Suspense>
    <user-data></user-data>
  </Suspense>
  <create-post-form></create-post-form>
</template>

<script>
import UserData from "@/widgets/UserData/";
import CreatePostForm from '../widgets/CreatePostForm/';

export default {
  components: { UserData, CreatePostForm },
};
</script>

<style>

</style>