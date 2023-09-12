<template>
  <div class="container">
    <main-modal v-if="$store.state.modal.isCreatePostModalActive" @close="$store.commit('modal/setIsCreatePostModalActive')">
      <create-post-form/>
    </main-modal>
    <div class="left-side">
      <Suspense>
        <menu-widget></menu-widget>
      </Suspense>
    </div>
    <div class="right-side">
      <div class="right-side__content">
        <Suspense>
          <header-widget></header-widget>
        </Suspense>
        <div class="router-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderWidget from "@/widgets/HeaderWidget";
import MenuWidget from "@/widgets/MenuWidget";
import CreatePostForm from "@/widgets/CreatePostForm";
export default {
  components: { HeaderWidget, MenuWidget, CreatePostForm },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
@import "@/app/styles/main.less";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: @primary;
  color: @white;
  font-family: "Inter", sans-serif;
}

.container {
  display: flex;
  
  .left-side {
    position: relative;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 48px;
    &__content {
      width: 80%;
    }
  }
}
</style>
