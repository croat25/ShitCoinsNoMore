import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueCollapsiblePanel)
app.mount('#app')
