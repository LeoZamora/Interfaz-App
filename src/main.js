import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import { routers } from './routers/routes'

createApp(App).use(routers).mount('#app')
