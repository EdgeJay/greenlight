<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">
      <p>Welcome back</p>
      <span>John Smith</span>
    </span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="">Sign out</a>
    </nav>
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
