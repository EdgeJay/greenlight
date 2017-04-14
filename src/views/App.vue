<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
    <nav-drawer></nav-drawer>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Navbar from './Navbar.vue';
import NavDrawer from './NavDrawer.vue';
import Jobs from './Jobs.vue';

const routes = [
  { path: '/jobs', component: Jobs },
];

// make Vue recognize router-link and router-view
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default {
  components: { Navbar, NavDrawer, Jobs },
  data() {
    return {
    };
  },
  created() {
  },
  router,
};
</script>

<style lang="scss" module>

</style>
