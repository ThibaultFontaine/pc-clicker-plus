export type AutoClicker = AutoClickerDb & {
  name: string
  price: number
  description: string
  image: string
}

export type AutoClickerDb = {
  id: number
  cps: number
  currentAmount: number
}
