<template>
  <div class="profile">
    <div class="profile__container">
      <div class="profile__primary-info">
        <img
          class="profile__logo"
          src="../../../assets/Cow.png"
          alt=""
          srcset=""
        />
        <div class="profile__primary-text">
          <h1 class="profile__username">{{ user.username }}</h1>
          <p class="profile__id">{{ user._id }}</p>
        </div>
      </div>
      <div class="profile__secondary-info">
        <p>Firstname: {{ user.firstname }}</p>
        <p>Lastname: {{ user.lastname }}</p>
        <p>Surname: {{ user.surname }}</p>
        <p>Age: {{ user.age }}</p>
        <p v-if="user.password">Password: {{ user.password }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "../api/getUser";

export default {
  async setup(props) {
    const { user } = getUser();
    return {
      user,
    };
  },
};
</script>

<style lang="less">
@import "@/app/styles/main.less";

.profile {
  display: flex;
  justify-content: center;
  &__container {
    width: 900px;
  }
  &__primary-info {
    display: flex;
    align-items: center;
    padding: 45px 0;
    gap: 15px;
  }
  &__username {
    font-size: 40px;
    font-weight: 600;
  }
  &__id {
    font-size: 20px;
    color: @light-grey;
  }
  &__logo {
    height: 145px;
    width: 145px;
    border-radius: 100%;
  }
  &__secondary-info {
    height: auto;
    padding: 20px 30px;
    font-size: 24px;
    border-radius: 20px;
    word-break: break-all;
    background: @dark-primary;
  }
}
</style>