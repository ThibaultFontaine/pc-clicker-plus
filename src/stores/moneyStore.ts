import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMoneyStore = defineStore('money', () => {
  const money = ref(0);

  //Ajouter de l'argent
  const addMoney = (amount: number) => {
    money.value += amount;
    console.log('money', money.value);
  };

  //Retirer de l'argent
  const removeMoney = (amount: number) => {
    money.value -= amount;
  };

  return { money, addMoney, removeMoney };
});
