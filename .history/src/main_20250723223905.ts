import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import VueTheMask from 'vue-the-mask';
import router from './router/router.js'
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router)
app.use(VueTheMask).mount('#app')
