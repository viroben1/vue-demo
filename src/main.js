

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './index.css'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
});
const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance;
app.use(createPinia())
app.use(router)

app.mount('#app')
