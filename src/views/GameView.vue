<script setup lang="ts">
import GamePannel from '@/components/GamePannel.vue';
import GameSidebar from '@/components/GameSidebar.vue';
</script>

<template>
  <div class="gameView">
    <div class="gamePannel">
      <GamePannel />
    </div>
    <div class="gameSidebar">
      <GameSidebar />
    </div>
  </div>
</template>

<style>
html,body{
  width: 100%;
}

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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 45%;
  width: 100%;
  font-family: 'PixelFont';
}

.levelCounter {
  font-size: 2rem;
  color: #ccc;
}

.moneyCounter {
  font-size: 2rem;
  color: green;
}
</style>
