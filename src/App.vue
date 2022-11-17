<script setup>
import {  RouterView } from 'vue-router'
import {ref} from "vue";

let progressRate = ref(0)

function increaseProgress(n) {
  progressRate.value += n
}

function decreaseProgress(n) {
  progressRate.value -= n
}
</script>

<template>
  <header>
    Lotso
    <!--TODO progress bar-->
    進度：{{progressRate}}
  </header>

  <RouterView @increase-progress="increaseProgress" />
</template>

<style scoped>

</style>
