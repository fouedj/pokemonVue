<template>
    <div class="pokemon-list">
        <h2>Liste des Pokémons</h2>
        <div class="pokemon-cards">
            <router-link v-for="pokemon in pokemons" :key="pokemon.id"
                :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }" class="pokemon-card">
                <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
                <h3>{{ pokemon.name }}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pokemons: [],
            pokemonImg: []
        };
    },
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => {
                console.log({ response })
                this.pokemons = response.data.results.map((pokemon, index) => ({
                    id: index + 1,
                    name: pokemon.name,
                    image: pokemon.image
                }));
            })
            .catch(error => {
                console.error(error);
            });


    }
};
</script>
<style scoped>
.pokemon-list {
    text-align: center;
}

.pokemon-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.pokemon-card {
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pokemon-image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
}
</style>