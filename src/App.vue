<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>

</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>