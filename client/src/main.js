import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router/router'
import store from './app/store'
import Vuelidate from 'vuelidate'
import UIComponents from '@/shared/UI'

const app = createApp(App)

UIComponents.forEach((component) => {
  app.component(component.name, component)
})

app.use(router).use(store).use(Vuelidate).mount('#app')