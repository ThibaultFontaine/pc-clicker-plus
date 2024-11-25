import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProgressionStore = defineStore('game', () => {
  const level = ref(1);

  // Monter de niveau
  const addLevel = () => {
    level.value += 1;
  };

  return { level, addLevel };
});
