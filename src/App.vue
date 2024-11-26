<script setup lang="ts">
import { RouterView } from 'vue-router'
import PagesFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div id="app">
    <RouterView />
    <PagesFooter/>    
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

.RouterView {
  flex: 1; 
}

.PagesFooter {
  height: auto;
  flex-shrink: 0; 
}
@font-face {
  font-family: 'PixelFont';
  src: url('@/assets/Fonts/joystix monospace.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
</style>
