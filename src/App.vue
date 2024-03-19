<template>

  <Header title="Pokemon" />

  <PokemonList title="Titre de la carte" :imageUrl="pokemonImg" buttonText="Texte du bouton"
    @onButtonClick="handleButtonClick" class="img" />
  <router-view></router-view>
</template>

<script setup>
import Header from "@/components/Header.vue";
import PokemonList from "@/components/PokemonList.vue"
import pokemonImg from "@/assets/pokemon.png"
const subTitle = "Lorem ipsum dolor."
</script>

<style scoped>
.img {
  width: 40px;
}
</style>
