<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoneyStore } from '@/stores/moneyStore'
import { useXpStore } from '@/stores/xpStore'
import { useClickStore } from '@/stores/clickStore'
import { useSkillsStore } from '@/stores/skillsStore'

import defaultImage from '@/assets/computer.png';
import pressedImage from '@/assets/pressed_computer.png';
import audioFile from '@/assets/keypress5.mp3';

const sound = new Audio(audioFile);

const moneyStore = useMoneyStore()
const xpStore = useXpStore()
const clickStore = useClickStore()
const skillsStore = useSkillsStore()

const { skills } = storeToRefs(skillsStore)

const { addMoney } = moneyStore
const { addXp } = xpStore
const { addClick } = clickStore

const acquiredSkills = computed(() => {
  return skills.value.filter((skill) => skill.isAcquired);
});

console.log(acquiredSkills.value, "acquiredSkills");
console.log(acquiredSkills.value[acquiredSkills.value.length - 1], "lastSkill");

const manualClick = () => {
  addMoney(1 * acquiredSkills.value[acquiredSkills.value.length - 1].multiplier)
  addXp(1)
  addClick()

  if (!sound.paused) {
    sound.pause();
    sound.currentTime = 0;
  }

  sound.play().catch((error) => {
    console.error('Erreur lors de la lecture du son :', error);
  });
}

const currentImage = ref(defaultImage);

const onMouseDown = () => {
  currentImage.value = pressedImage;
};

const onMouseUp = () => {
  currentImage.value = defaultImage;
};

const onHotkey = (event: KeyboardEvent) => {
  const keys = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"];
  if (keys.includes(event.key)) manualClick();
};

window.addEventListener('keydown', onHotkey);
</script>

<template>
  <img :src="currentImage" alt="Computer" width="400" height="400" @click="manualClick()" @mousedown="onMouseDown"
    @mouseup="onMouseUp" />
</template>
