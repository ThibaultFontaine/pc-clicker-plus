<script setup lang="ts">
import { useLeaderboard } from '@/services/leaderboard';
import { onUnmounted } from 'vue';

const { users, subscribe } = useLeaderboard();

const unsubscribe = subscribe();

onUnmounted(() => {
  unsubscribe();
});

</script>

<template>
  <div class="leaderboard">
    <v-skeleton-loader v-if="!users" type="paragraph" color="transparent"></v-skeleton-loader>
    <div class="d-flex flex-column ">
      <div v-for="(user, index) in users" :key="user.id" class="d-flex flex-row align-center mb-4">
        <p class="mr-5">{{ index + 1 }}</p>
        <v-card class="d-flex flex-row align-center">
          <v-card-title>{{ user.name ? user.name : 'Anonymous' }}</v-card-title>
          <v-card-text>{{ user.money }}$</v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaderboard {
  display: flex;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
