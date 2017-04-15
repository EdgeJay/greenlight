<template>
  <div>
    <sign-in-card v-if="!loggedIn"></sign-in-card>
  </div>
</template>

<script>
  import SignInCard from './SignInCard.vue';

  export default {
    components: { SignInCard },
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

<style lang="scss" scoped></style>
