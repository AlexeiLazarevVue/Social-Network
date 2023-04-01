<template>
    <router-link :to="`/users/${user._id}`">My profile</router-link>
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

<style>
</style>