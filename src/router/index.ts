import { createRouter, createWebHistory } from 'vue-router'
import Greeting from '../components/Greeting.vue'
import POIntro from '../components/POIntro.vue'
import ManageTask from '../components/ManageTask.vue'

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
    {
      path: '/manage-task',
      name: 'manage-task',
      component: ManageTask
    }
  ]
})

export default router
