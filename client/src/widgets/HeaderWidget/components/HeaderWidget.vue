<template>
  <header class="header">
    <div class="greeting">
      <p class="greeting__name">
        Hi {{ user.username }},
      </p>
      <h1 class="greeting__welcome">
        Welcome back 👋
      </h1>
    </div>
    <nav class="navigation">
      <router-link class="navigation__link" :to="`/users/${user._id}`">
        <img src="@/assets/User.png" class="navigation__img" alt="" srcset="">
      </router-link>
    </nav>
  </header>
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

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
  .greeting {
    &__name {
      font-size: 24px;
    }
    &__welcome {
      letter-spacing: -3px;
      font-size: 48px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }
  }

  .navigation {
    display: flex;

    &__link {
      padding: 20px;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>