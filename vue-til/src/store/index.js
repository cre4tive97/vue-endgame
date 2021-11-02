import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    deleteCount: 0,
    disabled: false,
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
    isDeleting(state) {
      return state.deleteCount > 0;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    clearToken(state) {
      state.token = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    deleteCounter(state, payload) {
      state.deleteCount = payload;
      let deleteCountInterval = setInterval(() => {
        state.deleteCount--;
        if (state.deleteCount <= 0) {
          clearInterval(deleteCountInterval);
        }
      }, 1000);
    },
    stopDeleteCounter(state, payload) {
      state.deleteCount = payload;
    },
    setDisabled(state, payload) {
      state.disabled = payload;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
