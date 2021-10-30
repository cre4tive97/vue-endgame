<template>
  <form>
    <div>
      <label for="username">ID : </label>
      <input id="username" type="text" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input id="password" type="password" />
    </div>
    <div>
      <label for="nickname">Nickname : </label>
      <input id="nickname" type="text" />
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  name: 'SignupForm',
};
</script>

<style></style>
