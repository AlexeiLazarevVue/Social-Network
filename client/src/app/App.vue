<template>
  <Suspense>
    <header-widget></header-widget>
  </Suspense>
  <div class="router-content">
    <router-view></router-view>
  </div>
  
</template>

<script>
import HeaderWidget from "@/widgets/HeaderWidget";
export default {
  components: { HeaderWidget },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .router-content {
    padding: 20px;
  }
}
</style>