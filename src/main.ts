import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import draggable from 'vuedraggable'

// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('draggable', draggable)

//TODO use template with slot
//TODO when every component mounted, need to reset progress bar.