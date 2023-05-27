import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Settings = { template: '<div>Settings</div>' }
const Item = { template: '<div>Item</div>' }

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/settings', 
    name: 'settings',
    component: Settings 
  },
  { 
    path: '/item/:itemId(\\d+)', 
    name: 'item',
    component: Item 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router