<template>
  <div :id="drawerId" class="mdl-layout__drawer">
    <span class="mdl-layout-title">
      <div v-if="loggedIn">
        <p>Welcome back</p>
        <span>{{ displayName }}</span>
      </div>
      <div v-else>
        <p>Please sign in to continue</p>
      </div>
    </span>
    <nav class="mdl-navigation" v-if="loggedIn">
      <a class="mdl-navigation__link" href="">Sign Out</a>
    </nav>
    <nav class="mdl-navigation" v-else style="padding-left:15px;padding-right:15px;">
      <router-link to="/signin" v-on:click.native="onSignIn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">Sign In</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    displayName() {
      return this.$store.state.user.displayName;
    },
  },
  data() {
    return {
      drawerId: 'app-nav-drawer',
    };
  },
  created() {
  },
  methods: {
    onSignIn() {
      const d = document.querySelector(`#${this.drawerId}`);
      const ob = document.querySelector('.mdl-layout__obfuscator');

      if (d) {
        d.classList.remove('is-visible');
      }

      if (ob) {
        ob.classList.remove('is-visible');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mdl-layout-title {
  line-height: 1.5em !important;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: lightgray;

  p {
    margin: 0;
  }
}
</style>
