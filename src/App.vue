<script setup lang="ts">
import { RouterView } from 'vue-router'
import PagesFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div class="app">
    <RouterView />
    <PagesFooter/> 
  </div>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app {
  min-width: 100%;
  min-height: 100%;
  background-color: #313338;
}

#app{
  height: 100%;
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

