<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import { useXpStore } from '@/stores/xpStore';

import ClickableComputer from '@/components/ClickableComputer.vue';
import type { ComputedRef } from 'vue';
import type { AutoClicker } from '@/models/autoClicker';
import { formatNumber } from '@/services/string';
import { XP_PER_LEVELS } from '@/constants/levels';

const moneyStore = useMoneyStore()
const xpStore = useXpStore()
const autoclickersStore = useAutoclickersStore()

const { money } = storeToRefs(moneyStore)
const { xp } = storeToRefs(xpStore)
const { autoclickers } = storeToRefs(autoclickersStore)

const level = computed(() => {
  let currentLevel = 1;
  let remainingXp = xp.value;

  let i = 0;
  while (remainingXp >= XP_PER_LEVELS[i]) {
    remainingXp -= XP_PER_LEVELS[i];
    currentLevel++;

    if (i < XP_PER_LEVELS.length - 1) {
      i++;
    }
  }

  return currentLevel;
});

const nextLevelProgress = computed(() => {
  const currentLevel = level.value;
  let remainingXp = xp.value;

  for (let i = 0; i < currentLevel - 1; i++) {
    if (i < XP_PER_LEVELS.length - 1) {
      remainingXp -= XP_PER_LEVELS[i];
    } else {
      remainingXp -= XP_PER_LEVELS[XP_PER_LEVELS.length - 1];
    }
  }

  let nextLevelXp;
  if (currentLevel < XP_PER_LEVELS.length - 1) {
    nextLevelXp = XP_PER_LEVELS[currentLevel - 1];
  } else {
    nextLevelXp = XP_PER_LEVELS[XP_PER_LEVELS.length - 1];
  }

  return (remainingXp / nextLevelXp) * 100;
});

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
  <div class="pannel">
    <v-col class="d-flex flex-column">
      <v-row>
        <v-col>
          <p class="levelCounter" style="font-size: 0.8rem;">Niveau : {{ level }} ({{ formatNumber(xp) }} XP)</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-progress-linear color="blue" height="10" :model-value="nextLevelProgress" striped />
        </v-col>
      </v-row>
    </v-col>
    <v-row>
      <v-col>
        <span class="moneyCounter">{{ formatNumber(money, 1) }}$</span>
      </v-col>
    </v-row>
    <ClickableComputer />
  </div>
</template>

<style scoped>
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
