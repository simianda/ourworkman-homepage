import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppNavBar from './components/Global/AppNavBar.vue'

const app = createApp(App)
app.component('AppNavBar', AppNavBar)
app.use(createPinia())
app.use(router)

app.mount('#app')
