<template>
  <div class="mdl-card mdl-shadow--2dp job-card">
    <div class="mdl-card__title">
      <i class="material-icons">assignment</i>
      <h2 class="mdl-card__title-text">Job Card</h2>
    </div>
    <div class="mdl-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a href="" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Approve</a>
      <a href="" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Reject</a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>
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
.job-card {
  margin: 20px auto 0 auto;
  width: 100%;
  min-height: 0;

  .material-icons + .mdl-card__title-text {
    margin-left: 5px;
  }

  .mdl-card__supporting-text,
  .mdl-card__actions {
    text-align: left;
  }
}
</style>
