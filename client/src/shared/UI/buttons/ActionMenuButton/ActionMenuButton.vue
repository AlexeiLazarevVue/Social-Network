<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'action-menu-button'
}
</script>

<style lang="less" scoped>
@import "@/app/styles/main.less";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  button {
    padding: 10px 30px;
    border: none;
    background: @secondary;
    color: #fff;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background: @primary;
    }
  }
</style>