<template>
  <div class="home">
    <posts :posts="posts"/>
  </div>
</template>

<script>

import Posts from "@/components/Posts";
import {createNamespacedHelpers} from 'vuex';

const {mapState, mapActions} = createNamespacedHelpers('posts');

export default {
  name: 'Home',
  components: {Posts},
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  mounted() {
    this.getPosts();
  }
}
</script>
