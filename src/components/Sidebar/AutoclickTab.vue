<script setup lang="ts">
import { ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useMoneyStore } from '@/stores/moneyStore';
import { useXpStore } from '@/stores/xpStore';
import { useAutoclickersStore } from '@/stores/autoclickersStore';

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
  if (  autoclicker != undefined && money.value >= autoclicker.price ) {
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
  <v-col v-for="autoClicker in autoclickers" :key="autoClicker.id" cols="12">
    <v-card class="pixel-card" @click="buyAutoclicker(autoClicker.id)">
      <v-row align="center">
        <v-col cols="4" class="image-container">
          <img :src="autoClicker.image" alt="AutoClicker" class="pixel-image">
        </v-col>
        <v-col cols="7">
          <v-card-title class="pixel-title">{{ autoClicker.name }} : {{ autoClicker.price }}$</v-card-title>
          <v-card-text class="pixel-description">{{ autoClicker.description }}</v-card-text>
        </v-col>
        <v-col cols="1">
          <span>{{ autoClicker.currentAmount }}</span>
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
