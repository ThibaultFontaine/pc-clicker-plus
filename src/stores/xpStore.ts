import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useXpStore = defineStore('game', () => {
  const xp = ref(0);

  //Ajouter de l'xp
  const addXp = (amount: number, multiplier: number) => {
    xp.value += amount * multiplier;
  };

  //Retirer de l'xp
  const removeXp = (amount: number) => {
    xp.value -= amount;
  };

  return { xp, addXp, removeXp };
});
