<template>
  <header>
    <router-link :to="`/users/${user._id}`">My profile</router-link>
    <router-link :to="`/authorization`">Authorization</router-link>
  </header>
</template>

<script>
import { getUser } from "../api/getUser";

export default {
  async setup(props) {
    const { user } = getUser();

    return {
      user,
    };
  },
};
</script>

<style lang="less" scoped>
  header {
    display: flex;
    background: #1f1f1f;
    a {
      display: flex;
      padding: 20px;
      color: #fff;
      text-decoration: none;
    }
  }
</style>