import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import  Vue3Marquee  from 'vue3-marquee'
import 'bootstrap-icons/font/bootstrap-icons.css'
createApp(App)
    .use(store)
    .use(router)
    .use(Vue3Marquee)
    .mount('#app')
