<script setup lang="ts">
import { ref } from 'vue';
import { findAllUsers } from '@/firebase/firestore.ts';
import { User } from "@/models/user.ts"
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
    <div v-for="(user, index) in users" :key="user.id" class="d-flex flex-row justify-center align-center mb-4">
      <p class="mr-5">{{ index + 1 }}</p>
      <v-card v-for="user in users" :key="user.id" class="d-flex flex-row justify-center align-center">
        <v-card-title>{{ user.name ? user.name : 'Anonymous' }}</v-card-title>
        <v-card-text>{{ user.money }}$</v-card-text>
      </v-card>
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
