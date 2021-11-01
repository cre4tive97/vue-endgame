<template>
  <div class="confirm">
    <p>{{ $store.state.deleteCount }}초 후 삭제됩니다.</p>
    <button class="btn" @click="stopDeleting">되돌리기</button>
  </div>
</template>

<script>
export default {
  computed: {
    isDeleting() {
      return this.$store.getters.isDeleting;
    },
  },
  methods: {
    stopDeleting() {
      this.$store.commit('stopDeleteCounter', -1);
    },
  },
};
</script>

<style scoped>
.confirm {
  width: 80%;
  padding: 1rem;
  background: #ff4057;
  position: fixed;
  bottom: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
