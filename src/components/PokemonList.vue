<template>
    <div class="list">
        <div v-if="loading">Chargement...</div>
        <div v-else>
            <div v-for="(item, index) in itemList" :key="index" class="card" @click="goToDetail">


                <p>{{ index }} - {{ item.name }}</p>
                <!-- <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png?language=fr`"
                    alt="Pokemon"> -->

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            loading: false,
            itemList: [] // Initialisation de itemList
        };
    },
    mounted() {
        this.loading = true;
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                // La structure de la réponse de l'API est un objet avec une propriété 'results' qui contient la liste des Pokémon
                this.itemList = response.data.results;
            })
            .catch(error => {
                console.error('Une erreur s\'est produite :', error);
            })
            .finally(() => {
                this.loading = false;
            });
    },
    methods: {
        goToDetail() {
            this.$router.push({ name: "PokemonDetail" })
        }
    }
};
</script>

<style scoped>
.list {
    display: flex;
    margin-left: auto;
    margin-right: auto;
}

.card {
    background-color: beige;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    border-radius: 12px;
}
</style>