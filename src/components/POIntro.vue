<!--page1-->
<template>
  <section class="flex-col">
    <img src="../assets/images/img_po.png" width="269" height="708" class="img-po"/>
    <ChatTheme class="animate__bounceIn">
      <template #text>
        我是 熊抱科技，開發 A 組的 PO 子蓓。<br>
        PO 也就是產品負責人（Product Owner）!
      </template>
    </ChatTheme>

    <ChatTheme class="animate__bounceIn animate__2s">
      <template #text>
        剛好我最近手邊有一個『人才招募系統』的案子，<br>
        我才剛列出了『產品需求清單』。<br>
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </template>
      <template #image><span></span></template>
      <template #btn>
        <RouterLink to="/manage-task">
          <div class="btn-primary bg-next animate__pulse">
            <p class="txt-neu fz-h2">Next</p>
          </div>
        </RouterLink>
      </template>
    </ChatTheme>

    <div class="block-info animate__fadeInRight animate__2s">
      <div class="flex-row flex-cb">
        <p class="fz-h2">產品負責人：</p>
        <i class="i-po"></i>
      </div>
      <div class="flex-row flex-ca">
        <div class="card-tag">
          <p class="fz-h3">評估產品待辦清單的<br>價值與重要性</p>
        </div>
        <i class="i-arrow"></i>
        <div class="card-tag">
          <p class="fz-h3">依序排列要執行的<br>優先順序</p>
        </div>
        <i class="i-arrow"></i>
        <div class="card-tag">
          <p class="fz-h3">排出待辦清單<br>(Product Backlog)</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import {onMounted} from "vue";
import ChatTheme from "./theme/ChatTheme.vue"

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 10)
})
</script>

<style scoped>

</style>
