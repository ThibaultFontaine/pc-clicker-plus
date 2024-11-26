import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useXpStore = defineStore('xp', () => {
  const xp = ref<number>(0);

  //Ajouter de l'xp
  const addXp = (amount: number) => {
    xp.value += amount;
    console.log('xp', xp.value);
  };

  return { xp, addXp };
});
