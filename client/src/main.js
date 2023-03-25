import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router/router'
import Vuelidate from 'vuelidate'

const app = createApp(App)

app.use(router).use(Vuelidate).mount('#app')