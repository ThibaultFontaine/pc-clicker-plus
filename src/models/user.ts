import type { AutoClickerDb } from '@/models/autoClicker'
import type { Skill } from './skill'

export type User = {
  id?: string
  name: string
  money: number
  experience: number
  autoClickers: AutoClickerDb[]
  skills: Skill[]
}
