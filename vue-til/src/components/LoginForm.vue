<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>
      <input id="username" v-model="username" type="text" />
    </div>
    <div>
      <label for="password"></label>
      <input id="password" v-model="password" type="text" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = { username: this.username, password: this.password };
        const { data } = await loginUser(userData);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
        this.initForm();
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
