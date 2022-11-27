<!--page6-->
<template>
  <section class="flex-col flex-cb w-100">
    <div class="flex-row w-100">
      <img src="../assets/images/img_engineer_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme class="animate__bounceIn">
        <template #text>
          Sprint 流程記憶大考驗<br>
          那你來試試把會議拖曳到對應的區域內吧！
        </template>
      </ChatTheme>
    </div>

    <draggable
        class="list-group flex-col flex-ec animate__fadeInRight"
        :list="meetings"
        group="meeting"
        itemKey="id"
        @start="startDrag(0)"
    >
      <template #item="{ element, index }">
        <div class="flex-row flex-cb list-group-item">
          <p class="flex-cc">{{ element.name }}</p>
        </div>
      </template>
    </draggable>

    <div class="sprint-content animate__fadeIn">
      <div class="img_sprint"/>
      <draggable
          class="list-group-1 list-group-item"
          :list="daily"
          group="meeting"
          itemKey="id"
          @start="startDrag(1)"
          @change="moveMeeting(1)"
      >
        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <p class="flex-cc">{{ element.name }}</p>
          </div>
        </template>
      </draggable>

      <draggable
          class="list-group-2 list-group-item"
          :list="review"
          group="meeting"
          itemKey="id"
          @start="startDrag(2)"
          @change="moveMeeting(2)"
      >
        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <p class="flex-cc">{{ element.name }}</p>
          </div>
        </template>
      </draggable>

      <draggable
          class="list-group-3 list-group-item"
          :list="retrospective"
          group="meeting"
          itemKey="id"
          @start="startDrag(3)"
          @change="moveMeeting(3)"
      >
        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <p class="flex-cc">{{ element.name }}</p>
          </div>
        </template>
      </draggable>
    </div>


    <div class="flex-row flex-cc w-100">
      <button @click="submit" class="btn-primary bg-next animate__pulse">
        <p class="txt-neu fz-h2">Submit</p>
      </button>
    </div>

    <AlertTheme v-show="isShow" @closeAlert="isShow = false" :alertMessage="alertMessage"
                :alert-btn-message="alertBtnMessage">
      <template></template>
    </AlertTheme>
  </section>
</template>

<script setup>
import {SPRINT_MEETINGS} from "@/constant/const";
import {onMounted, ref} from "vue";
import {BTN_OK, MEETING_IS_WRONG, MEETING_IS_EMPTY} from "@/constant/error";
import AlertTheme from './theme/AlertTheme.vue';
import ChatTheme from "./theme/ChatTheme.vue"
import {useRouter} from "vue-router/dist/vue-router";

//is alert show
let isShow = ref(false)

let alertMessage = ref("")
let alertBtnMessage = ref(BTN_OK)

const meetings = ref(SPRINT_MEETINGS)
const daily = ref([])
const review = ref([])
const retrospective = ref([])
const router = useRouter()
let fromBlock

function startDrag(from) {
  fromBlock = from
}

function moveMeeting(to) {
  if (to === 1 && daily.value.length === 2) {
    addToFrom(daily.value[1])
    daily.value.splice(1, 1)
  } else if (to === 2 && review.value.length === 2) {
    addToFrom(review.value[1])
    review.value.splice(1, 1)
  } else if (to === 3 && retrospective.value.length === 2) {
    addToFrom(retrospective.value[1])
    retrospective.value.splice(1, 1)
  }
}

function addToFrom(element) {
  if (fromBlock === 0) {
    meetings.value.push(element)
  } else if (fromBlock === 1) {
    daily.value.push(element)
  } else if (fromBlock === 2) {
    review.value.push(element)
  } else if (fromBlock === 3) {
    retrospective.value.push(element)
  }
}

function submit() {
  if (meetings.value.length > 0) {
    alertMessage.value = MEETING_IS_EMPTY
    isShow.value = true
  } else if (daily.value[0].id !== 1 || review.value[0].id !== 2 || retrospective.value[0].id !== 3) {
    alertMessage.value = MEETING_IS_WRONG
    isShow.value = true
  } else {
    router.push({
      name: 'retro-item'
    })
  }


}

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 75)
})
</script>

<style scoped>

</style>
