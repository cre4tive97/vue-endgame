<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
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
  methods: {
    async deleteItem() {
      try {
        this.$store.commit('deleteCounter', 5);
        new Promise(res => {
          setTimeout(() => {
            if (this.$store.getters.isDeleting) {
              res();
            }
          }, 4900);
        }).then(() => {
          deletePost(this.postItem._id).then(() => {
            this.$emit('refresh');
          });
        });
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style></style>
