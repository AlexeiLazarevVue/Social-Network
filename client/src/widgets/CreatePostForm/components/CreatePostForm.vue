<template>
  <form class="create-post-form">
    <textarea
      v-model="content"
      @input="(event) => {
          content = event.target.value;
          resizeTextarea(event);
        }"
      placeholder="What's new?"
      type="text"
      class="create-post-form__content-field"
    ></textarea>
    <main-file-label
      @change="setImage"
      class="create-post-form__file-field-wrapper"
    >
      Upload file
    </main-file-label>
    <main-button
      @click.prevent="createPost()"
      type="submit"
      class="create-post-form__submit-button"
    >
      Create
    </main-button>
  </form>
</template>

<script>
import { creatingPost } from "../api/creatingPost";
import { resizeTextarea } from "@/shared/lib/resizeTextarea/resizeTextarea";
export default {
  setup(props) {
    const { title, content, setImage, createPost } = creatingPost();

    return {
      title,
      content,
      setImage,
      createPost,
      resizeTextarea,
    };
  },
};
</script>

<style lang="less">
@import "@/app/styles/main.less";

.create-post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  &__content-field {
    min-height: 100px;
    width: 100%;
    padding: 15px;
    border: 5px solid @secondary;
    border-radius: 30px;
    font-size: 25px;
    background: none;
    color: @white;
    overflow: hidden;
    resize: none;
  }
  &__submit-button {
    min-width: 150px;
  }
}
</style>
