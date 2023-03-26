import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router/router'
import Vuelidate from 'vuelidate'
import store from './app/store'

const app = createApp(App)

app.use(router).use(store).use(Vuelidate).mount('#app')