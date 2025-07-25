import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import VueTheMask from 'vue-the-mask';
import router from './router/router.js'
import { createPinia } from 'pinia';

createApp(App).use(router).use(VueTheMask).mount('#app')
