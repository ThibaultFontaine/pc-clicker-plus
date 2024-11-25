import { defineStore } from 'pinia';
import { ref } from 'vue';
import { autoClickers } from '@/constants/autoClickers';

export const useGameStore = defineStore('game', () => {
  const xp = ref(0);

  //Ajouter de l'xp
  const addXp = (amount: number, multiplier: number) => {
    xp.value += amount * multiplier;
  };

  //Retirer de l'xp
  const removeXp = (amount: number) => {
    xp.value -= amount;
  };

  return { xp, autoClickers };
});
