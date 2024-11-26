import type { AutoClickerDb } from '@/models/autoClicker'

export type User = {
  id?: string
  name: string
  money: number
  experience: number
  autoClickers: AutoClickerDb[]
}
