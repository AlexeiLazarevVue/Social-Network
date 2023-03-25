<template>
  <h1>dkslhjklasfd</h1>
  <form>
    <input
      v-model="username"
      @input="username = $event.target.value"
      type="text"
    />
    <input
      v-model="firstname"
      @input="firstname = $event.target.value"
      type="text"
    />
    <input
      v-model="lastname"
      @input="lastname = $event.target.value"
      type="text"
    />
    <input
      v-model="surname"
      @input="surname = $event.target.value"
      type="text"
    />
    <input v-model="age" @input="age = $event.target.value" type="number" />
    <input
      v-model="password"
      @input="password = $event.target.value"
      type="text"
    />
    <button @click.prevent="register()" type="submit">SignUp</button>
  </form>
</template>

<script>
import { registration } from "../api/registration";
export default {
  setup(props) {
    const {
      username,
      firstname,
      lastname,
      surname,
      age,
      password,
      register,
    } = registration();

    return {
      username,
      firstname,
      lastname,
      surname,
      age,
      password,
      register,
    };
  },
};
</script>

<style lang="less">
</style>
