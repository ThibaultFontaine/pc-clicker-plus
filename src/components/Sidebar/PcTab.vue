<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSkillsStore } from "@/stores/skillsStore";
import { useMoneyStore } from "@/stores/moneyStore";

const skillsStore = useSkillsStore();
const moneyStore = useMoneyStore();

const { money } = storeToRefs(moneyStore);
const { skills } = storeToRefs(skillsStore);

const { addSkill } = skillsStore;

const buySkill = (id: number): void => {
  const skill = skills.value.find((skill) => skill.id === id);
  if (skill === undefined) {
    return;
  }

  if (!skill.isAcquired) {
    if (money.value >= skill.price) {
      addSkill(skill.id);
      moneyStore.removeMoney(skill.price);
      console.log(`Skill ${skill.name} bought`);
      console.log(skill)
    }
  }
  /*  else {
    showAlert.value = false;
    setTimeout(() => {
      showAlert.value = true;
    }, 2000);
  } */
}
</script>

<template>
<v-col v-for="skill in skills" :key="skill.id" cols="12">
    <v-card 
      class="pixel-card"
      @click="buySkill(skill.id)"
    >
        <v-row align="center">
            <v-col cols="4" class="image-container">
                <img :src="skill.image" alt="BonusClick" class="pixel-image">
            </v-col>
            <v-col cols="6">
                <v-card-title>{{ skill.name }}</v-card-title>
                <v-card-text>{{ skill.description }}</v-card-text>
            </v-col>
            <v-col cols="2">
              <span v-if="!skill.isAcquired">{{ skill.price }}</span>
              <img
                v-else
                src="@/assets/acquired.png"
                alt="Acquired"
                width="50"
                height="50"
              >
            </v-col>
         </v-row>
    </v-card>
</v-col>
</template>

<style scoped>
.pixel-card {
  background-color: #ccc;
  border: 4px solid #000;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 4px 4px 0px #000;
  display: flex;
  flex-direction: row;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pixel-image {
  width: 100%;
  height: auto;
  image-rendering: pixelated;
}
</style>

