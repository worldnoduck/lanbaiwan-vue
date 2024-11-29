import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'  
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index';
import VueWordCloud  from 'vuewordcloud';
import 'element-plus/dist/index.css'






const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
store.dispatch('fetchPublicKey');

app.use(store)
app.component("vue-word-cloud", VueWordCloud);
app.use(router);  // 使用 router
app.mount('#app')
