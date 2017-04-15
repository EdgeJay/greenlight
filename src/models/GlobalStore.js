import Vuex from 'vuex';

module.exports = new Vuex.Store({
  state: {
    loggedIn: false,
    user: {
      displayName: null,
    },
  },
});
