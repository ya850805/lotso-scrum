<!--page1-->
<template>
  <section class="content-card flex-col">
    <img src="../assets/images/img_po.png" class="img-po"/>
    <ChatTheme>
      <template #text>
        我是 熊抱科技，開發 A 組的 PO 子蓓。<br>
        PO 也就是產品負責人（Product Owner）!
      </template>
    </ChatTheme>

    <ChatTheme>
      <template #text>
        剛好我最近手邊有一個『人才招募系統』的案子，
        我才剛列出了『產品需求清單』。
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </template>

      <template #image><span></span></template>
      <template #btn>
        <RouterLink to="/manage-task">
          <div class="btn-primary bg-next">
            <p class="txt-neu fz-h2">Next</p>
          </div>
        </RouterLink>
      </template>
    </ChatTheme>

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
