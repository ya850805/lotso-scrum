<script setup>
import {RouterView} from 'vue-router'
import {ref} from "vue";

let progressRate = ref(0)

function setProgressRate(n) {
  progressRate.value = n
}
</script>

<template>
  <header>
    <img src="./assets/images/img_logo.svg" class="img-logo"/>
    <!--TODO progress bar animation-->
    <div class="outside-progress"
      :style="{'background':'linear-gradient(180deg, #F6E7D8 '+ (100-progressRate) + '%, #FF6A6C '+ (100-progressRate) +
      '%, #FF6B96 45%, #FD87FF 70%, #BB85FF 100%)',
      'animation':'barIn 1s'}">
      <div class="inner-progress flex_row flex_cc">
        <p class="fz-h2 txt-progress">{{ progressRate }}%</p>
      </div>
    </div>
  </header>

  <RouterView @set-progress-rate="setProgressRate"/>
</template>

<style scoped>


</style>
