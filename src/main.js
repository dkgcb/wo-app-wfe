import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import { createPinia } from 'pinia' // Import
import router from './router' // will automatically look for index.js

import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import MultiSelect from "primevue/multiselect"
import InputText from  "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import "bootstrap/dist/js/bootstrap.js"
// import axios from 'axios';

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';     
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';



// import { Button } from 'bootstrap';
// import InputText from 'primevue/inputtext';
// import { Toast } from 'bootstrap';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia) // Create the root store
app.use(PrimeVue)
app.use(ToastService)
// app.use(axios)

app.component('Button', Button)
app.component('MultiSelect', MultiSelect)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Textarea', Textarea)
app.mount('#app')


