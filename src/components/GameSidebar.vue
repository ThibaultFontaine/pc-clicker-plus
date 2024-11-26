<script setup lang="ts">
import { ref } from 'vue';

import PcTab from "@/components/Sidebar/PcTab.vue";
import LeaderboardTab from "@/components/Sidebar/LeaderboardTab.vue";
import AutoclickTab from "@/components/Sidebar/AutoclickTab.vue";
import ChallengesList from "@/components/Sidebar/ChallengesList.vue"
import { useMoneyStore } from "@/stores/moneyStore";
import { useXpStore } from "@/stores/xpStore";
import { useAutoclickersStore } from "@/stores/autoClickersStore";
import { storeToRefs } from 'pinia'




const moneyStore = useMoneyStore();
const xpStore = useXpStore();
const autoclickersStore = useAutoclickersStore();

const { money } = storeToRefs(moneyStore);
const { xp } = storeToRefs(xpStore);
const { autoclickers } = storeToRefs(autoclickersStore);

const currentTab = ref<string>('autoclicker');

const alert = ref(true);
const showAlert = () => {
  alert.value = false;
  setTimeout(() => {
    alert.value = true;
  }, 2000);
}
</script>

<template>
  <div class="sidebar">
    <v-card
      color="grey-darken-1"
    >
      <v-alert
        :hidden="alert"
        color="error"
        text="Tu es trop pauvre ! Reviens après avoir plus clické !"
      />
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        color="grey-darken-4"
      >
        <v-tab :value="'autoclick'">Recrutement</v-tab>
        <v-tab :value="'pc'">Compétences</v-tab>
        <v-tab :value="'challenge'">Défis</v-tab>
        <v-tab :value="'leaderboard'">Classement</v-tab>
      </v-tabs>

      <v-tabs-window v-model="currentTab">
        <v-tabs-window-item v-for="tab in ['autoclick', 'pc', 'challenge', 'leaderboard']" :key="tab" :value="tab">
          <v-container fluid class="scrollable-content">
            <v-row>
              <div v-if="tab === 'autoclick'">
                <AutoclickTab :sendError="showAlert"  />
              </div>
              <div v-else-if="tab === 'pc'">
                <PcTab />
              </div>
              <div v-else-if="tab === 'challenge'">
                <ChallengesList/>
              </div>
              <div v-else-if="tab === 'leaderboard'">
                <LeaderboardTab />
              </div>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<style scoped>
@import "@/assets/styles/pixel-styles.css";
.sidebar {
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 90%;
  overflow-y: auto;
  user-select: none;
}

.topBar {
  margin-bottom: 3rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.scrollable-content {
  max-height: 80vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  /* Hide Scrollbar IE and Edge */
  scrollbar-width: none;
  /* Hide Scrollbar Firefox */
}


</style>
