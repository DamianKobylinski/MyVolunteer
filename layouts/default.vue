<template>
  <div class="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped lang="scss">
.app {
  overflow-x: hidden;
  min-width: 100%;
  position: absolute;
  height: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
}
</style>
