import cookieController from "@/shared/lib/cookieController/cookieController";
export const userModule = {
  state: {
    token: cookieController.getCookie('token'),
    id: cookieController.getCookie('id'),
  },
  namespaced: true
}