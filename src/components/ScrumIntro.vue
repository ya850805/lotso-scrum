<!--page3-->
<template>
  <section class="flex-col">
    <img src="../assets/images/img_master.png" width="286" height="730" class="img-po"/>
    <i class="bg-ball-3"></i>
    <i class="bg-ball-4"></i>
    <ChatTheme class="animate__bounceIn">
      <template #text>
        嗨!我是Scrum Master 子畢，<br>
        主要是促成開發團隊協作、引導團隊進行<br>
        自省會議，提升團隊對 Scrum 瞭解。<br><br>

        我們平常管理任務是使用 Jira 這套軟體，<br>
        有空先去註冊和熟悉唷！
      </template>
      <template #image>
        <i class="i-jira"/>
      </template>
      <template #btn>
        <RouterLink to="/sort-task">
          <div class="btn-primary bg-next animate__pulse">
            <p class="txt-neu fz-h2">NEXT</p>
          </div>
        </RouterLink>
      </template>
    </ChatTheme>

    <div class="block-info flex-col flex-cc animate__fadeInRight animate__2s">
      <div class="flex-row flex-cb w-100">
        <p class="fz-h3 color_primary">短衝規劃會議<br>
          (Sprint Planning)</p>
        <i class="i-info"></i>
      </div>
      <div class="card-tag">
        <p>短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。</p>
      </div>
      <div class="flex-row flex-cb w-100">
        <p class="fz-h3 color_primary">點數(Sprint Point)</p>
      </div>
      <div class="card-tag">
        <p>Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import ChatTheme from "./theme/ChatTheme.vue"
import {onMounted} from "vue";

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 35)
})
</script>
<style scoped>

</style>
