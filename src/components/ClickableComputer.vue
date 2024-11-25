<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoneyStore } from '@/stores/moneyStore'
import { useXpStore } from '@/stores/xpStore'
import { useLevelStore } from '@/stores/progressionStore'

const moneyStore = useMoneyStore()
const xpStore = useXpStore()
const progressionStore = useLevelStore()

const { money } = storeToRefs(moneyStore)
const { xp } = storeToRefs(xpStore)
const { level } = storeToRefs(progressionStore)

const { addMoney } = moneyStore
const { addXp } = xpStore

const manualClick = () => {
  addMoney(level.value)
  addXp(level.value)
}

import defaultImage from '@/assets/computer.png';
import pressedImage from '@/assets/pressed_computer.png';

const currentImage = ref(defaultImage);

const onMouseDown = () => {
  currentImage.value = pressedImage;
};

const onMouseUp = () => {
  currentImage.value = defaultImage;
};
</script>

<template>
<img 
  :src="currentImage"
  alt="Computer" 
  width="400" 
  height="400" 
  @click="manualClick(1, 1)" 
  @mousedown="onMouseDown"
  @mouseup="onMouseUp"
/>
</template>
