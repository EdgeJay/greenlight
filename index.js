import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './src/views/App.vue';

const routes = [
  { path: '/', component: App },
];

// enable Flux-styled state management
Vue.use(Vuex);
// make Vue recognize router-link and router-view
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app-mount',
  router,
  store: require('./src/models/GlobalStore'),
});
