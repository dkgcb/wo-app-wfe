import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' // Import
import * as VueRouter from 'vue-router'

// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import "bootstrap/dist/js/bootstrap.js"

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Settings = { template: '<div>Settings</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/settings', component: Settings },
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


