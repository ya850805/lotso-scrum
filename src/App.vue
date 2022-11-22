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
    <img src="./assets/images/img_logo.svg" class="img-logo"/>
    <!--TODO progress bar-->
    <div>
      進度：{{progressRate}}
    </div>

  </header>

  <RouterView @set-progress-rate="setProgressRate" />
</template>

<style scoped>

</style>
