import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import draggable from 'vuedraggable'

// import './assets/layout.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('draggable', draggable)

//TODO modify README.md
