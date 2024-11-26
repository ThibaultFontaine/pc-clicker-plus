<script setup lang="ts">
import { bonusClicks } from "@/constants/bonusClicks";
</script>

<template>
<v-col v-for="bonusClick in bonusClicks" :key="bonusClick.id" cols="12">
    <v-card class="pixel-card">
        <v-row align="center">
            <v-col cols="4" class="image-container">
                <img :src="bonusClick.image" alt="BonusClick" class="pixel-image">
            </v-col>
            <v-col cols="8">
                <v-card-title>{{ bonusClick.name }}</v-card-title>
                <v-card-text>{{ bonusClick.description }}</v-card-text>
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

