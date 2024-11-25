import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const money = ref(0);

  //Ajouter de l'argent
  const addMoney = (amount: number, multiplier: number) => {
    money.value += amount * multiplier;
  };

  //Retirer de l'argent
  const removeMoney = (amount: number) => {
    money.value -= amount;
  };

  return { money };
});
