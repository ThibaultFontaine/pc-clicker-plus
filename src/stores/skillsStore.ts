import { SKILLS } from '@/constants/skills'
import type { Skill } from '@/models/skill'
import { getMe, saveData } from '@/services/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref<Skill[]>(SKILLS)

  getMe().then((user) => {
    if (!user || !user.skills) return

    skills.value.forEach((skill) => {
      const autoClicker = user.skills.find((uskill) => uskill.id === skill.id)
      skill.isAcquired = autoClicker?.isAcquired || false
    })
  })

  // Add skill
  function addSkill(id: number) {
    const skillToAdd = skills.value.filter((skill) => skill.id === id)[0]
    if (!skillToAdd) return

    skills.value[id - 1].isAcquired = true
    saveData({ skills: skills.value })
  }

  return { skills, addSkill }
})
