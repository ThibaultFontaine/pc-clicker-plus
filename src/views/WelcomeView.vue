<script setup lang="ts">
const startClick = ()=> { alert("Vous avez cliqué sur le bouton !");}
</script>

<template>
    <div class="welcome-view">
        <h1 class="title">Bienvenue sur PC-CLICKER + !</h1>
        <p class="description">PC-CLICKER + est le jeux de l'année.<br>
            Il vous propose de monter les échellons de l'empire du dev via la frénésie de vos clicks.<br>
            Augmentez vos connaissance, montez en expérience et affrontez le reste du monde !😎<br>
            Prêt à relever le défi ?<br>
            À vos claviers, prêt... Cliquez !</p>
        <button class="action-button" @click="startClick">Démarrez</button>
    </div>
</template>



<style scoped>
.welcome-view {
    text-align: center;
    margin: 50px;
    font-family: Arial, sans-serif;
}

.title {
    font-size: 2em;
    color: #333;
}

.description {
    margin: 20px 0;
    font-size: 1.2em;
    color: #555;
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