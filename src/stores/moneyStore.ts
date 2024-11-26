import { getMe, saveData } from '@/services/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoneyStore = defineStore('money', () => {
  const money = ref<number>(0)
  const memoryMoney = ref<number>(0)

  getMe().then((user) => {
    money.value = user?.money || 0
    memoryMoney.value = user?.money || 0
  })

  const addMoney = (amount: number) => {
    money.value += amount
  }

  const removeMoney = (amount: number) => {
    money.value -= amount
  }

  setInterval(() => {
    if (memoryMoney.value === money.value) return

    saveData({ money: money.value })
    memoryMoney.value = money.value
  }, 1000 * 10)

  return { money, addMoney, removeMoney }
})
