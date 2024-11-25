<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { saveData, getMe } from "@/services/user";

const router = useRouter();
const username = ref('');

getMe().then((user) => {
  if (user && user.name) {
    username.value = user.name;
  }
});

const startClick = () => {
  saveData({ name: username.value });
  router.push("/game");
}
</script>

<template>
  <div class="welcome-view">
    <h1 class="title">Bienvenue sur PC-CLICKER + !</h1>
    <p class="description">PC-CLICKER + est le jeux de l'année.<br><br>
      Il vous propose de monter les échellons de l'empire du dev via la frénésie de vos clicks.<br>
      Augmentez vos connaissance, montez en expérience et affrontez le reste du monde !😎<br>
      Prêt à relever le défi ?<br>
      À vos claviers, prêt... Cliquez !</p>

    <v-row class="d-flex flex-column justify-center align-center">
      <v-text-field v-model="username" label="Entrez votre nom d'utilisateur" class="username-input w-50 mb-3"
        :rules="[(v: string) => !!v || 'Champ requis']" hide-details="auto" variant="underlined" clearable
        base-color="white" color="white" />
      <v-btn class="action-button w-50" @click="startClick" :disabled="!username">Démarrer</v-btn>
    </v-row>
  </div>
</template>



<style scoped>
.welcome-view {
  background-color: #313338;
  text-align: center;
  font-family: Arial, sans-serif;
  height: 100%;
  width: 100%;
}

.title {
  font-size: 3em;
  color: white;
  padding-top: 2%;
}

.description {
  margin: 10%;
  font-size: 1.5em;
  color: white;
}

.action-button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
