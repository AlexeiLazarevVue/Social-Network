import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    id: null
  },
  getters: {
    getCookie: (state) => (key) => {
      const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      if (matches) {
        return decodeURIComponent(matches[1])
      }
    }
  },
  mutations: {
    setCookie(state, { key, value, options = {} }) {
      try {
        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();
        
        const finalOptions = {
          path: '/',
          expires: date,
          secure: false,
          samesite: 'lax',
          ...options
        }

        let updatedCookie = encodeURIComponent(key) + '=' + encodeURIComponent(value)

        for (let optionKey in finalOptions) {
          updatedCookie += "; " + optionKey;
          let optionValue = finalOptions[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }

        console.log(updatedCookie);
        document.cookie = updatedCookie;
        console.log(document.cookie);
      } catch (error) {
        console.log(error);
      }
    }
  }
})