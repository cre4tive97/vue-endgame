<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <button
        class="button"
        @click="deleteItem"
        :disabled="$store.state.disabled"
      >
        <i class="icon ion-md-trash"></i>
      </button>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatDate(date) {
      return new Date(date);
    },
  },
  methods: {
    async deleteItem() {
      try {
        this.$store.commit('deleteCounter', 5);
        this.$store.commit('setDisabled', true);
        await new Promise(res => {
          setTimeout(() => {
            if (this.$store.getters.isDeleting) {
              res();
            } else {
              this.$store.commit('setDisabled', false);
            }
          }, 4900);
        });
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      } catch (error) {
        console.log(error.response.data);
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style scoped>
.button {
  background: none;
  border: none;
}
</style>
