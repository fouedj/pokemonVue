<template>

  <Header title="Pokemon" />

  <Card title="Titre de la carte" :imageUrl="pokemonImg" buttonText="Texte du bouton" @onButtonClick="handleButtonClick"
    class="img" />

</template>

<script setup>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue"
import pokemonImg from "@/assets/pokemon.png"
const subTitle = "Lorem ipsum dolor."
</script>

<style scoped>
.img {
  width: 40px;
}
</style>
