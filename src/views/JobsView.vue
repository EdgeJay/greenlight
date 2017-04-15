<template>
  <div class="job-card-container">
    <job-card></job-card>
    <job-card></job-card>
    <job-card></job-card>
  </div>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
  components: { JobCard },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.job-card-container {
  text-align: center;
  padding: 0 20px;
}
</style>
