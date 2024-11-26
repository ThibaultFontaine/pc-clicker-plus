export type Challenge = {
  id: number
  name: string
  description: string
  objective: { type: ChallengeObjective; goal: number }
  reward: { money: number; xp: number }
  progress: number
  rewardClaimed: boolean
}

export enum ChallengeObjective {
  Clicks = 'clicks',
  Money = 'money',
  AutoClickers = 'autoClickers',
}
