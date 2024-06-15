import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import { routers } from './routers/routes.js'
import store from './store'


createApp(App).use(store).use(routers).mount('#app')
