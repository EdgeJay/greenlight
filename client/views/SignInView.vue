<template>
  <p>sign in view</p>
</template>

<script>
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
  created() {
  },
};
</script>

<style lang="scss" scoped></style>
