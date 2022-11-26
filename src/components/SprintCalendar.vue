<!--page5-->
<template>
  <section class="flex-col">
    <img src="../assets/images/img_engineer.png" width="220" height="400" class="img-engineer"/>

    <ChatTheme>
      <template #text>
        我是開發子能，Sprint是一個短衝，團隊會在這期間執行開發，舉辦每日<br>
        站立會議(Daily Scrum)，追蹤成員工作狀況，在Sprint結束也包含<br>
        短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)
      </template>
    </ChatTheme>

    <div class="block-glass flex-row flex-cc for-date">

      <div class="flex-col">
        <div class="flex-row flex-cc">
          <p class="txt-date">SUN</p>
          <p class="txt-date">MON</p>
          <p class="txt-date">TUE</p>
          <p class="txt-date">WED</p>
          <p class="txt-date">THU</p>
          <p class="txt-date">FRI</p>
          <p class="txt-date">SAT</p>
        </div>

        <div class="flex-row flex-cc">
          <p class="color_primary">Sprint<br>開始<br><br><br><br></p>
          <div class="flex_col flex-cc">
            <div class="flex-row">
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">1</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">2</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">3</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">4</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">5</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">6</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">7</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
            </div>

            <div class="flex-row">
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">8</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">9</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">10</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">11</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">12</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">13</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
              </div>
              <div class="tag-point for-date">
                <p class="flex-cc fz-h3">14</p>
                <div class="daily-tag-1 animate__fadeIn animate__2s">Daily</div>
                <div class="daily-tag-2 animate__fadeIn animate__3s">Review</div>
                <div class="daily-tag-3 animate__fadeIn animate__4s">Retro</div>
              </div>
            </div>
          </div>
          <p class="color_primary"><br><br><br>Sprint<br>結束</p>
        </div>
      </div>

      <RouterLink to="/sprint-process" @click="$emit('setProgressRate', 60)">
        <div class="btn-primary bg-next animate__pulse">
          <p class="txt-neu fz-h2">Next</p>
        </div>
      </RouterLink>

    </div>

    <div class="block-info for-date">
      <div class="flex-row flex-cb">
        <i class="i-meeting"></i>
      </div>

      <div class="flex-row flex-ca w-100">

        <div class="flex-col w-100 animate__fadeIn animate__2s">
          <p class="color_primary">每日站立會議<br>
            (Daily Scrum)</p>
          <div class="card-tag w-100">
            <p>每天都要進行的會議，以 15 分鐘為限制
              昨天為團隊的短衝目標做了那些進度
              今天我會如何準備來達到短衝目標
              過程中有遇到什麼問題、難題
              透過團隊分享，追蹤大家的工作狀況。</p>
          </div>
        </div>

        <i class="i-arrow animate__fadeIn animate__2s"></i>

        <div class="flex-col w-100 animate__fadeIn animate__3s">
          <p class="color_primary">短衝檢視會議<br>
            (Sprint Review)</p>
          <div class="card-tag w-100">
            <p>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</p>
          </div>
        </div>

        <i class="i-arrow animate__fadeIn animate__3s"></i>

        <div class="flex-col w-100 animate__fadeIn animate__4s">
          <p class="color_primary">短衝自省會議<br>
            (Sprint Retrospective)</p>
          <div class="card-tag w-100">
            <p>團隊會共同回顧該短衝歷程發生的事情
              好的地方
              可以改進的地方
              如何維持我們已有的成功經驗
              優化流程、讓團隊有變得更好的機會。</p>
          </div>
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
  emit('setProgressRate', 60)
})
</script>

<style scoped>

</style>
