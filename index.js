import Vue from 'vue';
import App from './src/views/App.vue';

const app = new Vue({
  el: '#app-mount',
  render: h => h(App)
});
