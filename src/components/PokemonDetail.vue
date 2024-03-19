<template>
    <div class="pokemon-detail">
        <div class="pokemon-info">
            <!-- <p>{{ index }} - {{ item.name }}</p> -->
            <!-- <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png?language=fr`"
                alt="Pokemon"> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['pokemon'],
    name: "PokemonDetail"
};
</script>

<style scoped>
.pokemon-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.pokemon-info {
    text-align: center;
}

img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
}
</style>