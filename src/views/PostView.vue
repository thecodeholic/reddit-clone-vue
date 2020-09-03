<template>
  <div class="post-view">
    <div class="main-section">
      <div class="row">
        <div class="col-1">

        </div>
        <div class="col-11">
          <h5 class="post-title">
            {{ post.title }}
          </h5>
        </div>
      </div>
    </div>
    <div class="comments-section">

    </div>
  </div>
</template>

<script>
export default {
  name: "PostView",
  mounted() {
    this.getPost(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>