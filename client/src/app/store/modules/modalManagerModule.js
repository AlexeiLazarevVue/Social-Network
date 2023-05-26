export const modalManagerModule = {
  state: {
    isCreatePostModalActive: false
  },
  mutations: {
    setIsCreatePostModalActive(state) {
      state.isCreatePostModalActive = !state.isCreatePostModalActive
    }
  },
  namespaced: true
}