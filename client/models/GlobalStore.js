import Vuex from 'vuex';

module.exports = new Vuex.Store({
  state: {
    loggedIn: false,
    user: {
      email: null,
      displayName: null,
    },
  },
  mutations: {
    loggedIn(state) {
      state.loggedIn = true;
    },
    loggedOut(state) {
      state.loggedIn = false;
    },
    updateUser(state, user) {
      state.user = user;
    },
  },
});
