<script setup lang="ts">
import { type PropType } from 'vue';

import { useAutoclickersStore } from '@/stores/autoclickersStore';
import { useMoneyStore } from '@/stores/moneyStore';
import { useXpStore } from '@/stores/xpStore';
import { storeToRefs } from 'pinia';

const props = defineProps({
  sendError: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

const moneyStore = useMoneyStore();
const xpStore = useXpStore();
const autoclickersStore = useAutoclickersStore();

const { money } = storeToRefs(moneyStore);
const { xp } = storeToRefs(xpStore);
const { autoclickers } = storeToRefs(autoclickersStore);

const buyAutoClicker = (id: number) => {
  const success = autoclickersStore.addAutoClicker(id);
  if (!success) props.sendError();
}
</script>

<template>
  <v-col v-for="autoClicker in autoclickers" :key="autoClicker.id" cols="12">
    <v-card class="pixel-card" @click="buyAutoClicker(autoClicker.id)">
      <v-row align="center">
        <v-col cols="4" class="image-container">
          <img :src="autoClicker.image" alt="AutoClicker" class="pixel-image">
        </v-col>
        <v-col cols="7">
          <v-card-title class="pixel-title">{{ autoClicker.name }}{{ autoClicker.currentAmount ? `
            (${autoClicker.currentAmount})` : "" }}</v-card-title>
          <v-card-text class="pixel-description">{{ autoClicker.price }} $</v-card-text>
          <v-card-text class="pixel-description">{{ autoClicker.description }}</v-card-text>
          <v-card-text class="pixel-description">{{ autoClicker.cps }}$/sec</v-card-text>

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
