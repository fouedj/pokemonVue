import { createRouter, createWebHistory } from 'vue-router';
import PokemonList from '../components/PokemonList.vue';
import PokemonDetail from '../components/PokemonDetail.vue';

const routes = [
    { path: '/', name: "PokemonList", component: PokemonList },
    { path: '/detail', component: PokemonDetail, props: true, name: "PokemonDetail" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;