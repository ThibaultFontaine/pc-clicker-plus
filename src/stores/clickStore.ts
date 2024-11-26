import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClickStore = defineStore('clicks', () => {
  const clicks = ref<number>(1);

  // Monter de niveau
  const addClick = () => {
    clicks.value += 1;
  };

  return { clicks, addClick };
});
