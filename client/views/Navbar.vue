<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Greenlight</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" v-if="canEdit">
          <i class="material-icons">add</i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    canEdit() {
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
