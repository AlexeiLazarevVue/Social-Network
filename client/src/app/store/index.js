import { createStore } from "vuex";
import cookieController from "../../shared/lib/cookieController";

export default createStore({
  state: {
    token: cookieController.getCookie('token'),
    id: cookieController.getCookie('id')
  },
})