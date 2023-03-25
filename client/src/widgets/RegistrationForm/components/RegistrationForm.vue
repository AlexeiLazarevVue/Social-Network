<template>
<h1>dkslhjklasfd</h1>
  <form>
    <input
      :value="username"
      @input="username = $event.target.value"
      type="text"
    />
    <input
      :value="firstname"
      @input="firstname = $event.target.value"
      type="text"
    />
    <input
      :value="lastname"
      @input="lastname = $event.target.value"
      type="text"
    />
    <input
      :value="surname"
      @input="surname = $event.target.value"
      type="text"
    />
    <input :value="age" @input="age = $event.target.value" type="number" />
    <input
      :value="password"
      @input="password = $event.target.value"
      type="text"
    />
    <button @click.prevent="registration()" type="submit">SignUp</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      surname: "",
      age: "",
      password: "",
    };
  },
  methods: {
    async registration() {
      try {
        const response = await axios.post(
        "http://localhost:5000/api/registration/",
          { 
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            surname: this.surname,
            age: this.age,
            password: this.password,
          }
        );
        console.log(response.data);
      } catch(e) {
        console.log(e);
      }
      

      // this.posts = response.data
    },
  },
  mounted() {},
};
</script>

<style lang="less">

</style>
