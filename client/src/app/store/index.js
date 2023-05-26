import { createStore } from "vuex";
import { postModule } from "./modules/postModule";
import { userModule } from "./modules/userModule";
import { modalManagerModule } from "./modules/modalManagerModule";

export default createStore({
  modules: {
    post: postModule,
    user: userModule,
    modal: modalManagerModule
  }
})