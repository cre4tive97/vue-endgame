<template>
  <form @submit.prevent="submitForm">
    <div>
      <label ref="username" for="username">ID : </label>
      <input
        @input="usernameInvalidStyle()"
        id="username"
        type="text"
        v-model="username"
      />
    </div>
    <div>
      <label for="password">PW : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button :disabled="isUsernameValid || !password || nickname" type="submit">
      Sign Up
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
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
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username}님이 회원가입 하셨습니다.`;
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
    usernameInvalidStyle() {
      if (this.isUsernameValid === false) {
        this.$refs.username.style.fontWeight = '700';
      } else {
        this.$refs.username.style.fontWeight = '500';
      }
    },
  },
};
</script>

<style></style>
