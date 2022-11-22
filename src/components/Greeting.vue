<!--page0-->
<template>
  <section class="content-card flex-col flex-sb">

    <img src="../assets/images/img_po.png" class="img-po"/>
    <img src="../assets/images/img_bear.png" class="img-bear">

    <div class="block-glass">
      <p class="fz-h3 w_100">Hi ! 歡迎加入熊抱科技~<br>
        在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
        請接受挑戰任務!<br><br><br>
        成功通過Scrum新手村的挑戰任務吧～～～～
      </p>
    </div>

    <div class="block-btn">
      <div class="flex-row flex-cs">
        <p class="fz-h1 txt-neu">挑戰任務</p>
        <i class="i-task"></i>
      </div>

      <RouterLink to="/po-intro" @click="$emit('setProgressRate', 10)">
        <div class="btn-primary">
          <p class="txt-neu fz-h2">Next</p>
        </div>
      </RouterLink>
    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>

</style>
