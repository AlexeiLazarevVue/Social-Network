import HomePage from '@/pages/HomePage'
import RegistrationPage from '@/pages/RegistrationPage'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/registration',
    component: RegistrationPage
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
})
export default router;