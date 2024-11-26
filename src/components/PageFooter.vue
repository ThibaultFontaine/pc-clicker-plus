<template>
    <v-footer class="v-footer">
        <p class="txt-footer">
            {{ new Date().getFullYear() }} — <strong>Developed by: TYPJ Studios</strong>
        </p>
    </v-footer>
</template>

<style scoped>
.v-footer {
    padding: 15px;
    background-color: #282c34;
    width: 100%;
    height: 10%;
}

.txt-footer {
    text-align: center;
    padding: 15px;
    background-color: #282c34;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}
</style>