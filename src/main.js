import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/inputs.css';
import './assets/styles/style.css';
import store from './store/index'
import Vuex from 'vuex'


createApp(App).use(store).mount('#app')
