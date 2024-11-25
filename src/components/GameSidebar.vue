<script setup lang="ts">
import { ref } from 'vue';

const currentTab = ref('autoclicker');

function setCurrentTab(value: string) {
  currentTab.value = value;
}
</script>

<template>
  <div class="sidebar">
  <v-card>
    <v-tabs
      v-model="currentTab"
      align-tabs="center"
      color="deep-purple-accent-4"
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
            {{tab}}
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
  height: 100%;
  width: 100%;
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
