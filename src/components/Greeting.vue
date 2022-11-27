<!--page0-->
<template>
  <section class="content-card flex-col flex-sb">
    <img src="../assets/images/img_po.png" width="220" height="600" class="img-po animate__fadeInLeft"/>
    <img src="../assets/images/img_bear.svg" width="523" height="599" class="img-bear animate__fadeInRight">

    <div class="block-glass">
      <p class="fz-h3 w_100">Hi ! 歡迎加入熊抱科技~<br>
        在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
        <br> <br>
        請接受挑戰任務！成功通過Scrum新手村的挑戰任務吧～
      </p>
    </div>

    <div class="block-btn">
      <div class="flex-row flex-cs animate__pulse">
        <p class="fz-h1 txt-neu">挑戰任務</p>
        <i class="i-task"></i>
      </div>
      <RouterLink to="/po-intro">
        <div class="btn-primary animate__shakeX">
          <p class="txt-neu fz-h2">Next</p>
        </div>
      </RouterLink>
    </div>

  </section>
</template>

<script setup>
import CharTheme from './theme/ChatTheme.vue'
import {onMounted} from "vue";

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 0)
})
</script>

<style scoped>

</style>
