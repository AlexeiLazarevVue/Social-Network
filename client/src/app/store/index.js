import { createStore } from "vuex";
import { postModule } from "./modules/postModule";
import { userModule } from "./modules/userModule";

export default createStore({
  modules: {
    post: postModule,
    user: userModule
  }
})