<template>
  <div>
    <div>{{ user._id }}</div>
    <div>{{ user.username }}</div>
    <div>{{ user.firstname }}</div>
    <div>{{ user.lastname }}</div>
    <div>{{ user.surname }}</div>
    <div>{{ user.age }}</div>
  </div>
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