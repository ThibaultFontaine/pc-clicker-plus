<script setup lang="ts">;
import { CHALLENGES } from "@/constants/challenges";
import { ChallengeObjective, type Challenge } from "@/models/challenge";
import { getMe, saveData } from "@/services/user";
import { useAutoclickersStore } from "@/stores/autoclickersStore";
import { useClickStore } from "@/stores/clickStore";
import { useMoneyStore } from "@/stores/moneyStore";
import { useXpStore } from "@/stores/xpStore";
import { onMounted, ref, watch } from "vue";
import { reactive } from 'vue';

const moneyStore = useMoneyStore();
const xpStore = useXpStore();
const clickStore = useClickStore();
const autoclickersStore = useAutoclickersStore();

const isLoading = ref(true);
const claimedRewards = ref<number[]>([]);

const myChallenges = reactive(CHALLENGES);

const calculateProgress = (challenge: Challenge) => {
  let progress = 0;
  if (challenge.objective.type === ChallengeObjective.Clicks) {
    progress = clickStore.clicks || 0;
  } else if (challenge.objective.type === ChallengeObjective.Money) {
    progress = moneyStore.money || 0;
  } else if (challenge.objective.type === ChallengeObjective.AutoClickers) {
    progress = autoclickersStore.totalAutoClickers || 0;
  }
  return progress;
};

const getChallengeClass = (challenge: Challenge) => {
  if (challenge.rewardClaimed) {
    return "completed-rewarded";
  } else if (challenge.progress >= challenge.objective.goal) {
    return "completed-not-rewarded";
  } else {
    return "not-completed";
  }
};

const claimReward = async (challenge: Challenge) => {
  console.log(challenge.progress)
  if (challenge.progress >= challenge.objective.goal && !challenge.rewardClaimed) {
    moneyStore.addMoney(challenge.reward.money);
    xpStore.addXp(challenge.reward.xp);

    challenge.rewardClaimed = true;

    if (!claimedRewards.value.includes(challenge.id)) {
      claimedRewards.value.push(challenge.id);
    }

    await saveData({ completedChallenges: claimedRewards.value });
  }
};

onMounted(async () => {
  const currentUser = await getMe();

  claimedRewards.value = currentUser?.completedChallenges || [];

  myChallenges.forEach((challenge: Challenge) => {
    challenge.progress = calculateProgress(challenge);

    if (claimedRewards.value.includes(challenge.id)) {
      challenge.rewardClaimed = true;
    }
  });

  isLoading.value = false;
});

watch(
  () => [moneyStore.money, clickStore.clicks, autoclickersStore.autoclickers],
  ([newMoney, newClicks, newAutoclicker]) => {
    console.log('Money:', newMoney, 'Clicks:', newClicks, 'AutoClicker:', newAutoclicker);

    myChallenges.forEach((challenge) => {
      challenge.progress = calculateProgress(challenge);
    });
  },
  { immediate: true }
);
</script>

<template>
  <v-container fluid class="scrollable-content">
    <v-row>
      <v-col v-for="challenge in myChallenges" :key="challenge.id" cols="12">
        <v-card class="pixel-card" :class="getChallengeClass(challenge)" @click="claimReward(challenge)">
          <v-col>
            <v-card-title class="pixel-title">{{ challenge.name }}</v-card-title>
            <v-row class="mb-3">
              <v-card-text class="pixel-description">
                {{ challenge.description }}
              </v-card-text>

              <v-card-text>
                {{ challenge.progress }}/{{ challenge.objective.goal }}
              </v-card-text>

              <v-progress-linear :model-value="(challenge.progress / challenge.objective.goal) * 100" color="black"
                height="8" class="progress-bar"></v-progress-linear>
            </v-row>
            <div class="reward-container">
              <div class="reward-item">
                <span class="label">Récompenses :</span>
                <span class="value">{{ challenge.reward.xp }} xp</span>
              </div>
              <div class="reward-item">
                <span class="value">{{ challenge.reward.money }} $</span>
              </div>
            </div>

          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import "@/assets/styles/pixel-styles.css";

.not-completed {
  background-color: #e0e0e0;
  color: #000;
}

.completed-not-rewarded {
  background-color: #a8d5ba;
  color: #000;
}

.completed-rewarded {
  background-color: #9494947a;
  opacity: 0.5;
  color: #fff;
}

.reward-container {
  display: flex;
  flex-direction: column;
}

.reward-item {
  display: flex;
  flex-direction: column;
}

.loading-message {
  text-align: center;
  font-size: 20px;
  color: #007bff;
}
</style>
