<!--page8-->

<template>
  <section class="content-card final-page flex-col flex-sb">
    <img src="../assets/images/img_group.png" width="487" height="420" class="img-po animate__fadeInLeft "/>
    <img src="../assets/images/img_bear.svg" width="523" height="599" class="img-bear animate__fadeInRight">
    <i class="bg-ball-1"></i>
    <i class="bg-ball-2"></i>

    <div class="block-glass">
      <p class="fz-h3 w_100">Hi ! 恭喜你加入熊抱科技~<br>
        成功通過Scrum新手村的挑戰任務吧！
        <br><br><br>
        正式加入熊抱科技開發A組！～
      </p>
    </div>

    <div class="block-btn">
      <div class="flex-row flex-cs animate__pulse">
        <p class="fz-h1 txt-neu">完成任務</p>
        <i class="i-task"></i>
      </div>

      <RouterLink to="/">
        <div class="btn-primary">
          <p class="txt-neu fz-h2">Restart</p>
        </div>
      </RouterLink>
    </div>

    <ConfettiExplosion :stageHeight="2000" :stageWidth="2000" :duration="8000" class="animate_final"/>

  </section>
</template>

<script setup>
import {onMounted} from "vue";
import ConfettiExplosion from "vue-confetti-explosion";

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 100)
})
</script>

<style scoped>
.animate_final {
  position: fixed;
  top: 0;
  left: 30%;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

</style>
