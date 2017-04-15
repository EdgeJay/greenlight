<template>
  <div class="mdl-card mdl-shadow--2dp sign-in-card">
    <div class="mdl-card__title">
      <i class="material-icons">announcement</i>
      <h2 class="mdl-card__title-text">Sign In Required</h2>
    </div>
    <div class="mdl-card__supporting-text">
      Please sign in to continue
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a href="" class="mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect">Sign In</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
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
}
</style>
