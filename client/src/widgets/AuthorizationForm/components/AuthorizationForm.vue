<template>
  <h1>dkslhjklasfd</h1>
  <form>
    <input
      v-model="username"
      @input="username = $event.target.value"
      type="text"
    />
    <input
      v-model="password"
      @input="password = $event.target.value"
      type="text"
    />
    <button @click.prevent="authorize()" type="submit">SignIn</button>
  </form>
</template>

<script>
import { authorization } from "../api/authorization";
export default {
  setup(props) {
    const {
      username,
      password,
      authorize,
    } = authorization();

    return {
      username,
      password,
      authorize,
    };
  },
};
</script>

<style lang="less">
</style>
