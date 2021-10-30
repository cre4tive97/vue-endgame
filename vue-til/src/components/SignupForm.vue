<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign Up</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      console.log(userData);
      const response = await registerUser(userData);
      console.log(response);
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
