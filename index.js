import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/views/App.vue';

const routes = [
  { path: '/', component: App },
];

// make Vue recognize router-link and router-view
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app-mount',
  router,
});
