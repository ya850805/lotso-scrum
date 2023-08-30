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
    <div class="outside-progress" :style="{'background':'linear-gradient(180deg, #F6E7D890 '+ (100-progressRate) + '%, #FF6A6C50 '+ (100-progressRate) + '%, #FF6B9670 45%, #FD87FF90 70%, #BB85FF 100%)'}"></div>
    <div class="outside-progress">
      <div class="inner-progress flex_row flex_cc">
        <p class="fz-h2 txt-progress">{{ progressRate }}%</p>
      </div>
    </div>
  </header>

  <RouterView @set-progress-rate="setProgressRate"/>
</template>

<style scoped>
</style>
