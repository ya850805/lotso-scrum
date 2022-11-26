<!--page7-->
<template>
  <section class="flex-col flex-cc w-100 retro-list">
    <div class="flex-row">
      <img src="../assets/images/img_master_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme>
        <template #text>
          今天是開發B組的Retro，你也看看Retro都做什麼～會請成員提出哪些是<br>
          做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence，<br>
          Retro 重點在於『正面表述』，你也思考看看，哪些是適合Retro回饋吧！<br>
        </template>
      </ChatTheme>
    </div>

    <draggable
        class="list-group flex-row flex-ss flex-wrap w-100"
        :list="retroItems"
        group="retroItem"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="flex-row flex-cb list-group-item">
          <span class="tag-point">
            <img v-if="element.mood === 0" width="32" height="32" src="../assets/icon/i_happy.svg"/>
            <img v-if="element.mood === 1" width="32" height="32" src="../assets/icon/i_sad.svg"/>
          </span>
          <p class="flex-cc">{{ element.description }}</p>
        </div>
      </template>
    </draggable>

    <div class="block-info flex-col flex-cc ">
      <i class="i-retro"></i>
      <div class="flex-row">
        <div class="flex_col">
          <p class="fz-h3">做得好的地方</p>
          <div class="order-list">
            <div class="list-group-item"></div>
            <div class="list-group-item"></div>
          </div>
          <draggable
              class="list-area sprint-list flex-col flex-cs"
              :list="wellDone"
              group="retroItem"
              itemKey="id"
          >
            <template #item="{ element, index }">
              <div class="flex-row flex-cb list-group-item">
                <span class="tag-point">
                 <img v-if="element.mood === 0" width="32" height="32" src="../assets/icon/i_happy.svg"/>
                 <img v-if="element.mood === 1" width="32" height="32" src="../assets/icon/i_sad.svg"/>
                 </span>
                <p class="flex-cc">{{ element.description }}</p>
              </div>
            </template>
          </draggable>
        </div>
        <div class="flex_col">
          <p class="fz-h3">待改進的地方</p>

          <div class="order-list">
            <div class="list-group-item"></div>
            <div class="list-group-item"></div>
          </div>

          <draggable
              class="list-area sprint-list flex-col flex-cs"
              :list="needImprovement"
              group="retroItem"
              itemKey="id"
          >
            <template #item="{ element, index }">
              <div class="flex-row flex-cb list-group-item">
                <span class="tag-point">
                   <img v-if="element.mood === 0" width="32" height="32" src="../assets/icon/i_happy.svg"/>
                   <img v-if="element.mood === 1" width="32" height="32" src="../assets/icon/i_sad.svg"/>
                </span>
                <p class="flex-cc">{{ element.description }}</p>
              </div>
            </template>
          </draggable>

        </div>


      </div>
      <button @click="submit" class="btn-primary bg-next animate__pulse">
        <p class="txt-neu fz-h2">Submit</p>
      </button>
    </div>

    <AlertTheme v-show="isShow" @closeAlert="isShow = false" :alertMessage="alertMessage"
                :alert-btn-message="alertBtnMessage">
      <template></template>
    </AlertTheme>

    <ConfirmTheme v-show="isShow" @closeAlert="isShow = false" :confirmMessage="confirmMessage"
                :confirm-btn-message="confirmBtnMessage">
      <template></template>
    </ConfirmTheme>

  </section>
</template>

<script setup>
import {ref} from "vue";
import {RETRO_ITEMS} from "@/constant/const";
import {onMounted} from "vue";
import AlertTheme from './theme/AlertTheme.vue';
import ConfirmTheme from './theme/ConfirmTheme.vue';
import ChatTheme from "./theme/ChatTheme.vue"
import {useRouter} from "vue-router/dist/vue-router";
import {BTN_OK, TASK_NAME_IS_BLANK,BTN_CONFIRM} from "@/constant/error";

const retroItems = ref(RETRO_ITEMS)
const wellDone = ref([])
const needImprovement = ref([])
const emit = defineEmits(['setProgressRate'])

//is alert show
let isShow = ref(false)

let alertMessage = ref("")
let alertBtnMessage = ref(BTN_OK)

let confirmMessage = ref("")
let confirmBtnMessage = ref(BTN_CONFIRM)

function submit() {
  confirmMessage.value = TASK_NAME_IS_BLANK
  isShow.value = true
  //TODO validate retro item
  // alert("12345");
  // router.push({
  //   name: 'final'
  // })
}



onMounted(() => {
  emit('setProgressRate', 90)
})
</script>

<style scoped>

</style>
