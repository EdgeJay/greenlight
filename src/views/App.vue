<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar></navbar>
    <nav-drawer></nav-drawer>
    <main class="mdl-layout__content">
      <sign-in-card v-if="!loggedIn"></sign-in-card>
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import NavDrawer from './NavDrawer.vue';
import SignInCard from './SignInCard.vue';

export default {
  components: { Navbar, NavDrawer, SignInCard },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style lang="scss" module></style>
