import HomePage from '@/pages/HomePage'
import RegistrationPage from '@/pages/RegistrationPage'
import AuthorizationPage from '@/pages/AuthorizationPage'
import UserPage from '@/pages/UserPage'
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
  },
  {
    path: '/users/:id',
    component: UserPage
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})
export default router;