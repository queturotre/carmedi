import { createRouter, createWebHistory } from 'vue-router'
import CreditHome from '../views/CreditHome.vue'
import BankNotes from '../views/BankNotes.vue'

const routes = [
  {
    path: '/',
    name: 'creditHome',
    component: CreditHome
  },
  {
    path: '/banknotes',
    name: 'banknotes',
    component: BankNotes
  },
  {
    path: "/time",
    name: "time",
    component: () => import("../views/TimeConversion.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
