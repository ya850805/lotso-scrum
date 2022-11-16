import { createRouter, createWebHistory } from 'vue-router'
import Greeting from '../components/Greeting.vue'
import POIntro from '../components/POIntro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'greeting',
      component: Greeting
    },
    {
      path: '/po-intro',
      name: 'po-intro',
      component: POIntro
    },
  ]
})

export default router
