<script setup lang="ts">
import ClickableComputer from '@/components/ClickableComputer.vue';
import type { AutoClicker } from '@/models/autoClicker';
import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import { storeToRefs } from 'pinia';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import GameSidebar from "../components/GameSidebar.vue";

const moneyStore = useMoneyStore()
const autoclickersStore = useAutoclickersStore()

const { money } = storeToRefs(moneyStore)
const { autoclickers } = storeToRefs(autoclickersStore)

const totalAutoclickers: ComputedRef<number> = computed(() => {
  console.log(autoclickers)
  return autoclickers.value
    .map((auto: AutoClicker) => auto.currentAmount)
    .reduce((acc: number, val: number) => acc + val, 0)
});

const handleAutoclicking = (): void => {
  if (totalAutoclickers.value > 0) {
    const totalMoneyPerSecond: number = Object.values(autoclickers.value)
      .map((auto: AutoClicker) => auto.currentAmount * auto.cps)
      .reduce((acc: number, val: number) => acc + val, 0)
      ;

    moneyStore.addMoney(totalMoneyPerSecond);
  }

}

setInterval(handleAutoclicking, 1000);
</script>

<template>
  <div class="gameView">
    <div class="gamePannel">
      <v-row class="d-flex">
        <v-col>
          <span class="moneyCounter">{{ money }}$</span>
        </v-col>
        <v-col>
          <v-progress-linear color="deep-orange" height="10" model-value="60" striped />
        </v-col>
      </v-row>
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
  height: 88.5vh;
  width: 100%;
  background-color: #313338;
}

.gameSidebar,
.gamePannel {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'PixelFont';
}

.moneyCounter {
  font-size: 2rem;
  color: green;
}
</style>
