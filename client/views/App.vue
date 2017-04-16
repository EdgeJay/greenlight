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
import Navbar from './Navbar.vue';
import NavDrawer from './NavDrawer.vue';

export default {
  components: { Navbar, NavDrawer },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style lang="scss" module></style>
