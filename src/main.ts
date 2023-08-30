import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import draggable from 'vuedraggable'
import 'animate.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('draggable', draggable)

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
