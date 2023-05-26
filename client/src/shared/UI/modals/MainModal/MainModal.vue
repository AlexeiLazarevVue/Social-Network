<template>
  <div @click="$emit('close')" class="main-modal">
    <div @click.stop class="main-modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-modal'
}
</script>

<style lang="less" scoped>
.main-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  &__content {
    min-width: 500px;
    min-height: 300px;
    padding: 30px;
    border-radius: 30px;
    background: #242731;
  }
}
</style>