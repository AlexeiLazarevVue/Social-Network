<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "main-button",
};
</script>

<style lang="less" scoped>
button {
  position: relative;
  padding: 20px;
  border: none;
  border-radius: 16px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  background: #6e5dd2;
  color: #feebf6;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #6e5dd2;
    box-shadow: 0 0 10px #6e5dd2, 0 0 40px #6e5dd2;
  }
}
</style>