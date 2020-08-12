<template>
  <div class="posts p-3">
    <post v-for="post in posts" :post="post" :key="post.id"/>
  </div>
</template>

<script>
import Post from "@/components/Post";

import {createNamespacedHelpers} from 'vuex';

const {mapState} = createNamespacedHelpers('posts');

export default {
name: "Posts",
  components: {Post},
  computed: {
    ...mapState(['posts'])
  }
}
</script>

<style scoped>

</style>