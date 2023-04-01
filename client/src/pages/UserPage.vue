<template>
  <Suspense>
    <user-data></user-data>
  </Suspense>
</template>

<script>
import UserData from "@/widgets/UserData/";

export default {
  components: { UserData },
};
</script>

<style>

</style>