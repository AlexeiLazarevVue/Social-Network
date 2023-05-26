<template>
  <label>
    <slot></slot>
    <input type="file">
  </label>
</template>

<script>
export default {
  name: "main-file-label",
};
</script>

<style lang="less" scoped>
label {
  position: relative;
  min-width: 150px;
  padding: 20px;
  border: 5px solid #6e5dd2;
  border-radius: 16px;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  background: none;
  color: #feebf6;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px #6e5dd2, 0 0 40px #6e5dd2;
  }
  input {
    display: none;
  }
}
</style>