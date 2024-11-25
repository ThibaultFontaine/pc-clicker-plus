<script setup lang="ts">
import { ref } from 'vue';
import { autoClickers } from "@/constants/autoClickers";

const currentTab = ref('autoclicker');

const setCurrentTab = (value: string): void => {
  currentTab.value = value;
}
</script>

<template>
  <div class="sidebar">
    <v-card
    color="grey-darken-1"
    >
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        color="grey-darken-4"
      >
        <v-tab :value="'autoclick'">AutoClick</v-tab>
        <v-tab :value="'pc'">PC</v-tab>
        <v-tab :value="'challenge'">Défi</v-tab>
        <v-tab :value="'leaderboard'">Classement</v-tab>
      </v-tabs>

      <v-tabs-window v-model="currentTab">
        <v-tabs-window-item
          v-for="tab in ['autoclick', 'pc', 'challenge', 'leaderboard']"
          :key="tab"
          :value="tab"
        >
          <v-container fluid>
            <v-row>
              <div v-if="tab === 'autoclick'">
                <v-col
                  v-for="autoClicker in autoClickers"
                  :key="autoClicker.id"
                  cols="12"
                >
                  <v-card color="grey-lighten-1">
                    <v-card-title>{{ autoClicker.name }}</v-card-title>
                    <v-card-text>{{ autoClicker.description }}</v-card-text>
                  </v-card>
                </v-col>
              </div>
              <div v-else-if="tab === 'pc'">
                <p>This is the PC tab content.</p>
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
  width: 50%;
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


</style>
