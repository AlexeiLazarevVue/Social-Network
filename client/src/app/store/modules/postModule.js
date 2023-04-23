export const postModule = {
  state: {
    posts: []
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post)
    }
  },
  namespaced: true
}