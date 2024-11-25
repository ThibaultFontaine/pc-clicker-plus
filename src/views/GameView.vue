<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import ClickableComputer from '@/components/ClickableComputer.vue';
import GameSidebar from "../components/GameSidebar.vue";
</script>

<template>
  <div class="gameView">
    <div class="gamePannel">
      <ClickableComputer />
    </div>
    <div class="gameSidebar">
      <GameSidebar />
    </div>
  </div>
</template>

<style>
.gameView {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #313338;
}

.gameSidebar,
.gamePannel {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
