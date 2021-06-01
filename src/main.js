import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';

import "@/assets/global.css";

const app = createApp(App);
app.use(Vuex);
app.use(router);
app.use(store);
app.mount('#app');
