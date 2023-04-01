import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router/router'
import Vuelidate from 'vuelidate'
import VueCookies from 'vue-cookies'
import store from './app/store'

const app = createApp(App)

app.use(VueCookies, {
  expires: '1d',
  path: '/',
  secure: true,
  sameSite: 'lax'
})

app.use(router).use(store).use(Vuelidate).mount('#app')