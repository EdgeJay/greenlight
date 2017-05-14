<template>
  <div class="mdl-card mdl-shadow--2dp sign-in-card">
    <div class="mdl-card__title">
      <i class="material-icons">https</i>
      <h2 class="mdl-card__title-text">Sign In</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <p v-if="!loggedIn">Please select sign in method</p>
      <p v-else>You are already logged in</p>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  </div>
</template>

<script>
let auth2 = null;

export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    onGApiCallback() {
      gapi.load('auth2', () => {
        gapi.auth2.init()
        .then(() => {
          auth2 = gapi.auth2.getAuthInstance();

          if (!auth2.isSignedIn.get()) {
            // user not logged in
            this.$store.commit('loggedOut');
            auth2.isSignedIn.listen(this.onGApiSignedIn);
          } else {
            const profile = auth2.currentUser.get().getBasicProfile();

            // user already logged in
            this.$store.commit('loggedIn');
            this.$store.commit('updateUser', {
              email: profile.getEmail(),
              displayName: profile.getName(),
            });
          }
        });
      });
    },
    onGApiSignedIn(signedIn) {
      if (signedIn) {
        const profile = auth2.currentUser.get().getBasicProfile();

        this.$store.commit('loggedIn');
        this.$store.commit('updateUser', {
          email: profile.getEmail(),
          displayName: profile.getName(),
        });
      } else {
        this.$store.commit('loggedOut');
      }
    },
  },
  created() {
    window.onLoadCallback = this.onGApiCallback;
  },
};
</script>

<style lang="scss" scoped>
.sign-in-card {
  margin: 20px;
  width: calc(100% - 40px);
  min-height: 0;

  .material-icons + .mdl-card__title-text {
    margin-left: 5px;
  }

  .mdl-card__supporting-text {
    text-align: center;
  }

  .g-signin2 {
    display: inline-block;
  }
}
</style>
