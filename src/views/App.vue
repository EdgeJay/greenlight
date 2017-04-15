<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
    <nav-drawer display-name="John Doe"></nav-drawer>
    <main class="mdl-layout__content"></main>
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

<style lang="scss" module>

</style>
