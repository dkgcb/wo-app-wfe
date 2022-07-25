import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' // Import
import * as VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.js"

const routes = [
  // TODO
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia) // Create the root store
app.mount('#app')


