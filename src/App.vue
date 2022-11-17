<script setup>
import {  RouterView } from 'vue-router'
import {ref} from "vue";

let progressRate = ref(0)

function setProgressRate(n) {
  progressRate.value = n
}
</script>

<template>
  <header>
    Lotso
    <!--TODO progress bar-->
    進度：{{progressRate}}
  </header>

  <RouterView @set-progress-rate="setProgressRate" />
</template>

<style scoped>

</style>
