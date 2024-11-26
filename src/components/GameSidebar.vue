<script setup lang="ts">
import { ref } from 'vue';
import { autoClickers } from "@/constants/autoClickers";
import { bonusClicks } from "@/constants/bonusClicks";

const currentTab = ref('autoclicker');

const setCurrentTab = (value: string): void => {
  currentTab.value = value;
}
</script>

<template>
  <div class="sidebar">
    <v-card color="grey-darken-1">
      <v-tabs v-model="currentTab" align-tabs="center" color="grey-darken-4">
        <v-tab :value="'autoclick'">AutoClick</v-tab>
        <v-tab :value="'pc'">PC</v-tab>
        <v-tab :value="'challenge'">Défi</v-tab>
        <v-tab :value="'leaderboard'">Classement</v-tab>
      </v-tabs>

      <v-tabs-window v-model="currentTab">
        <v-tabs-window-item v-for="tab in ['autoclick', 'pc', 'challenge', 'leaderboard']" :key="tab" :value="tab">
          <v-container fluid class="scrollable-content">
            <v-row>
              <div v-if="tab === 'autoclick'">
                <v-col v-for="autoClicker in autoClickers" :key="autoClicker.id" cols="12">
                  <v-card class="pixel-card">
                    <v-row align="center">
                      <v-col cols="4" class="image-container">
                        <img :src="autoClicker.image" alt="AutoClicker Image" class="pixel-image">
                      </v-col>
                      <v-col cols="8">
                        <v-card-title class="pixel-title">{{ autoClicker.name }}</v-card-title>
                        <v-card-text class="pixel-description">{{ autoClicker.description }}</v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </div>
              <div v-else-if="tab === 'pc'">
                <v-col v-for="bonusClick in bonusClicks" :key="bonusClick.id" cols="12">
                  <v-card class="pixel-card">
                    <v-row align="center">
                      <v-col cols="4" class="image-container">
                        <img :src="bonusClick.image" alt="BonusClick Image" class="pixel-image">
                      </v-col>
                      <v-col cols="8">
                        <v-card-title>{{ bonusClick.name }}</v-card-title>
                        <v-card-text>{{ bonusClick.description }}</v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </div>
              <div v-else-if="tab === 'challenge'">
                <p>This is the Challenge tab content.</p>
              </div>
              <div v-else-if="tab === 'leaderboard'">
                <p>This is the Leaderboard tab content.</p>
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
