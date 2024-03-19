<template>
  <HelloWord :sub-title="subTitle" />

</template>

<script setup>
import HelloWord from "@/components/HelloWord.vue";
const subTitle = "Lorem ipsum dolor."
</script>

<style scoped></style>
