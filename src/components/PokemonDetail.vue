<template>
    <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Height: {{ pokemon.height }}</p>
        <p v-if="pokemon.types.length === 1">Type: {{ pokemon.types[0].type.name }}</p>
        <p v-else>Types:
            <span v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}{{ index <
        pokemon.types.length - 1 ? ', ' : '' }}</span>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pokemon: null
        };
    },
    mounted() {
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                this.pokemon = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>