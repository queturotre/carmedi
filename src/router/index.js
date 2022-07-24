import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/banknotes',
    name: 'banknotes',
    component: () => import(/* webpackChunkName: "about" */ '../views/BankNotes.vue')
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
