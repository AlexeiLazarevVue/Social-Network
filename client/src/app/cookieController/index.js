class cookieController {
  getCookie(key) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    if (matches) {
      return decodeURIComponent(matches[1])
    }
  }
  setCookie(payload) {
    try {
      const { key, value, options = {}} = payload

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
export default new cookieController();