import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Greeting from '../components/Greeting.vue'
import POIntro from '../components/POIntro.vue'
import ManageTask from '../components/ManageTask.vue'
import ScrumIntro from '../components/ScrumIntro.vue'
import SortTask from '../components/SortTask.vue'
import SprintCalendar from '../components/SprintCalendar.vue'
import SprintProcess from '../components/SprintProcess.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/scrum-intro',
      name: 'scrum-intro',
      component: ScrumIntro
    },
    {
      path: '/sort-task',
      name: 'sort-task',
      component: SortTask
    },
    {
      path: '/sprint-calendar',
      name: 'sprint-calendar',
      component: SprintCalendar
    },
    {
      path: '/sprint-process',
      name: 'sprint-process',
      component: SprintProcess
    }
  ]
})

export default router
