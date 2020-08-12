<template>
  <div class="posts p-3">
    <post v-for="post in posts" :post="post" :key="post.id"/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
name: "Posts",
  components: {Post},
  props: {
    posts: Array
  }
}
</script>

<style scoped>

</style>