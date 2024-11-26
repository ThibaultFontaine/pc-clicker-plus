<script setup lang="ts">
import { ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useMoneyStore } from '@/stores/moneyStore';
import { useXpStore } from '@/stores/xpStore';
import { useAutoclickersStore } from '@/stores/autoclickersStore';
import PcTab from "@/components/Sidebar/PcTab.vue";
import LeaderboardTab from "@/components/Sidebar/LeaderboardTab.vue";
import AutoclickTab from "@/components/Sidebar/AutoclickTab.vue";

const moneyStore = useMoneyStore();
const xpStore = useXpStore();
const autoclickersStore = useAutoclickersStore();

const { money } = storeToRefs(moneyStore);
const { xp } = storeToRefs(xpStore);
const { autoclickers } = storeToRefs(autoclickersStore);

const currentTab = ref<string>('autoclicker');

const setCurrentTab = (value: string): void => {
  currentTab.value = value;
}

const showAlert = ref(true);

const buyAutoclicker = (id: number): void => {
  const autoclicker = autoclickers.value.find((auto) => auto.id === id);
  if (money.value >= autoclicker.price) {
    autoclicker.currentAmount++;
    moneyStore.removeMoney(autoclicker.price);
  } else {
    showAlert.value = false;
    setTimeout(() => {
      showAlert.value = true;
    }, 2000);
  }
}
</script>

<template>
  <div class="sidebar">
    <v-card
      color="grey-darken-1"
    >
      <v-alert
        :hidden="showAlert"
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
                <AutoclickTab/>
              </div>
              <div v-else-if="tab === 'pc'">
                <PcTab/>
              </div>
              <div v-else-if="tab === 'challenge'">
                <p>This is the Challenge tab content.</p>
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
.sidebar {
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 90%;
  overflow-y: auto
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

.scrollable-content::-webkit-scrollbar {
  display: none;
  /* Hide Scrollbar Chrome */
}

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

.pixel-title {
  font-family: 'PixelFont', sans-serif;
  color: #333;
  margin-bottom: 8px;
}

.pixel-description {
  font-family: 'PixelFont', sans-serif;
  color: #555;
}

.pixel-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}


</style>
