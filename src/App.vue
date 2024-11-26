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
  min-width: 100%;
  min-height: 100%;
}
@font-face {
  font-family: 'PixelFont';
  src: url('@/assets/Fonts/joystix monospace.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
* {
  user-select: none; /* Désactive la sélection */
  -webkit-user-select: none; /* Pour les navigateurs WebKit */
  -moz-user-select: none; /* Pour les navigateurs Mozilla */
  -ms-user-select: none; /* Pour Internet Explorer */
}

img {
  pointer-events: none;
}
</style>
