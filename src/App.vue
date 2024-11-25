<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-width: 100%;
  min-height: 100%;
}
</style>
