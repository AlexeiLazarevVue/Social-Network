import HomePage from '@/pages/HomePage'
import RegistrationPage from '@/pages/RegistrationPage'
import AuthorizationPage from '@/pages/AuthorizationPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/registration',
    component: RegistrationPage
  },
  {
    path: '/authorization',
    component: AuthorizationPage
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})
export default router;