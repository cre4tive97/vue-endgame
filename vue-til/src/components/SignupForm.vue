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
    };
  },
  methods: {
    submitForm() {
      registerUser();
    },
  },
};
</script>

<style></style>
