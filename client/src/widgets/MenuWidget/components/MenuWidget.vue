<template>
  <div class="wrapper" :style="{'width': menuWidth + 'px'}">
    <aside class="menu" ref="menu">
      <div class="menu__main-content">
        <div class="logo">
          <router-link :to="'/'">
            <img src="@/assets/Logo.png" class="logo__image" alt="" />
          </router-link>
        </div>
        <nav class="navigation">
          <h5 class="navigation__title">Main links</h5>
          <router-link class="navigation__link" :to="`/users/${user._id}`">
            <img
              src="@/assets/Message.png"
              class="navigation__img"
              alt=""
              srcset=""
            />
            Main
          </router-link>
          <router-link class="navigation__link" :to="`/authorization`">
            <img
              src="@/assets/Message.png"
              class="navigation__img"
              alt=""
              srcset=""
            />
            Messages</router-link
          >
          <router-link class="navigation__link" :to="`/authorization`">
            <img
              src="@/assets/Message.png"
              class="navigation__img"
              alt=""
              srcset=""
            />
            Friends
          </router-link>
          <router-link class="navigation__link" :to="`/authorization`">
            <img
              src="@/assets/Message.png"
              class="navigation__img"
              alt=""
              srcset=""
            />
            Notifications</router-link
          >
          <router-link class="navigation__link" :to="`/authorization`">
            <img
              src="@/assets/Message.png"
              class="navigation__img"
              alt=""
              srcset=""
            />
            Settings</router-link
          >
        </nav>
      </div>
      <div class="menu__additional-content">
        <div class="post-modal-opener">
          <main-button
            @click="$store.commit('modal/setIsCreatePostModalActive')"
            >Create post</main-button
          >
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getUser } from "../api/getUser";

export default {
  async setup(props) {
    const { user } = getUser();

    const menu = ref(null)
    const menuWidth = ref(null);
    
    onMounted(() => menuWidth.value = menu.value.offsetWidth)

    return {
      user,
      menu,
      menuWidth
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/app/styles/main.less";
.menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 100vh;
  padding: 0 20px 30px 20px;
  border-right: 1px solid @translucent-grey;
  &__main-content {
    border-bottom: 1px solid @translucent-grey;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      &__image {
        width: 175px;
      }
    }

    .navigation {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      &__title {
        padding: 0 20px;
        color: @light-grey;
        font-size: 12px;
      }
      &__link {
        display: flex;
        padding: 20px;
        color: @light-grey;
        text-decoration: none;
        font-size: 14px;
        transition: 0.1s;
        font-weight: 600;
        &:hover {
          color: @white;
        }
      }
      &__img {
        height: 21px;
        width: 21px;
        margin: 0 16px 0 0;
      }
    }
  }
  &__additional-content {
    .post-modal-opener {
      display: flex;
      justify-content: center;
      padding: 40px;
    }
  }
}
</style>