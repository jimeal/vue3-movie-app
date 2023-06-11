import { createApp } from 'vue'
import App from './App'
import router from './routes'
import store from './store'
import loadImage from '../Plugins/loadImage'

createApp(App)
  .use(router)
  .use(store)
  .use(loadImage)
  .mount('#app')