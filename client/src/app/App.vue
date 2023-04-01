<template>
  <Suspense>
    <header-widget></header-widget>
  </Suspense>
  <router-view></router-view>
</template>

<script>
import HeaderWidget from "@/widgets/HeaderWidget";
export default {
  components: { HeaderWidget },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>