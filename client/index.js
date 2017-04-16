import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './views/App.vue';
import HomeView from './views/HomeView.vue';
import SignInView from './views/SignInView.vue';

const routes = [{
  path: '/',
  component: App,
  children: [
    { path: '', component: HomeView },
    { path: 'signin', component: SignInView },
  ],
}];

// enable Flux-styled state management
Vue.use(Vuex);
// make Vue recognize router-link and router-view
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const store = require('./models/GlobalStore');

/* eslint no-new: "off" */

new Vue({
  el: '#app-mount',
  router,
  store,
});
