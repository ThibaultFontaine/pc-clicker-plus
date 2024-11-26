import { AUTO_CLICKERS } from '@/constants/autoClickers'
import type { AutoClicker, AutoClickerDb } from '@/models/autoClicker'
import { getMe, saveData } from '@/services/user'
import { useMoneyStore } from '@/stores/moneyStore'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'

const moneyStore = useMoneyStore()
const { money } = storeToRefs(moneyStore)

export const useAutoclickersStore = defineStore('autoclickers', () => {
  const autoclickers = ref<AutoClicker[]>(AUTO_CLICKERS)

  getMe().then((user) => {
    if (!user || !user.autoClickers) return

    autoclickers.value.forEach((ac) => {
      const autoClicker = user.autoClickers.find((uac) => uac.id === ac.id)
      ac.currentAmount = autoClicker?.currentAmount || 0
    })
  })

  const addAutoClicker = (id: number): boolean => {
    const autoclicker = autoclickers.value.find((auto) => auto.id === id)
    if (!autoclicker || autoclicker.price > money.value) return false

    moneyStore.removeMoney(autoclicker.price)
    autoclickers.value = autoclickers.value.map((ac): AutoClicker => {
      if (ac.id === id) {
        return {
          ...ac,
          currentAmount: ac.currentAmount + 1,
        }
      }

      return ac
    })

    const autoClickersOfUser = autoclickers.value.map(
      (ac): AutoClickerDb => ({
        id: ac.id,
        cps: ac.cps,
        currentAmount: ac.currentAmount,
      }),
    )
    saveData({ autoClickers: autoClickersOfUser, money: money.value })

    return true
  }

  return { autoclickers, addAutoClicker }
})
