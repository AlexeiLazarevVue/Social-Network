<template>
  <div v-for="post in getPosts()" :key="post._id">
    <h1>{{post}}</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  methods: {
    async getPosts() {
      const response = await axios.get('http://localhost:5000/api/posts')
      
      return response.data
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
