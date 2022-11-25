<!--page4-->
<template>
  <section class="flex-col">
    <div class="flex-row">
      <img src="../assets/images/img_master_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme>
        <template #text>
          目前我們團隊一次 Sprint 週期是兩週的時間，依照我<br>
          的觀察，目前團隊可以負擔的點數(Sprint Point) 大約是 21 點左右。
        </template>
      </ChatTheme>
    </div>

    <div class="flex-col block-glass">
      <p> 你來練習把任務排到短衝待辦清單吧！請在「？」給予對應點數(Sprint Point)吧！<br>
        點數共有1 、2 、3 、5 、8 、13 、21，Point越大代表花費時間越多~<br></p>
      <div class="flex-row font-default">點選
        <div class="tag-point"><p class="flex-cc">8</p></div>
        即可選擇點數~
      </div>
    </div>
    <draggable
        class="list-group flex-row flex-ss flex-wrap"
        :list="taskArray"
        group="tasks"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="flex-row flex-cb list-group-item">
          <!--          <span class="tag-point"><p class="flex-cc">{{ element.points }}</p></span>-->
          <!--          <span class="tag-point"><p class="flex-cc">{{ element.points }}</p></span>-->

          <select v-model="element.points" @change="editPoint(1, element.id, $event)" class="tag-point color_primary">
            <option disabled>選項</option>
            <option value="" disabled>?</option>
            <option v-for="point in taskPointArray" :value="point">{{ point }}</option>
          </select>
          <p class="flex-cc">{{ element.name }}</p>
          <a href="{{ element.link }}"><i class="i-link"></i></a>
        </div>
      </template>
    </draggable>

    <div class="block-info flex-col flex-cc">
      <div class="flex-row flex-cb w-100">
        <p class="fz-h3">開發A組<br>短衝待辦清單</p>
        <i class="i-list"></i>
      </div>
      <p>21點/5人</p>
      <div class="order-list sprint-list">
        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
      </div>
      <draggable
          class="list-area sprint-list flex-col flex-cs"
          :list="finalTaskArray"
          group="tasks"
          itemKey="id"
          @change="checkNullPoint"
      >
        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <select :value="element.points" @change="editPoint(2, element.id, $event)" class="tag-point color_primary">
              <option v-for="point in taskPointArray" :value="point">{{ point }}</option>
            </select>
            <p class="flex-cc">{{ element.name }}</p>
            <a href="{{ element.link }}"><i class="i-link"></i></a>
          </div>
        </template>
      </draggable>
      <button @click="submit" class="btn-primary bg-next animate__pulse">
        <p class="txt-neu fz-h2">Submit</p>
      </button>
    </div>


    <!--    <RouterLink to="/sprint-calendar" @click="submit()">Submit</RouterLink>-->

    <AlertTheme v-show="isShow" @closeAlert="isShow = false" :alertMessage="alertMessage"
                :alert-btn-message="alertBtnMessage">
      <template></template>
    </AlertTheme>
  </section>
</template>

<script setup>
import {TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {onMounted, ref} from "vue";
import {POINT_IS_EMPTY, SPRINT_IS_EMPTY} from "@/constant/error";
import AlertTheme from './theme/AlertTheme.vue';
import ChatTheme from "./theme/ChatTheme.vue"
import {useRouter} from "vue-router/dist/vue-router";

const taskArray = ref(JSON.parse(localStorage.getItem(TASKS_KEY)))
const finalTaskArray = ref([])
const taskPointArray = ref(TASK_STORY_POINTS)
const router = useRouter()

//is alert show
let isShow = ref(false)

let alertMessage = ref("")
let alertBtnMessage = ref("OK")


function editPoint(from, id, event) {
  const editPoint = event.target.value === "" ? "" : parseInt(event.target.value)
  if (from == 1) {
    taskArray.value.filter(task => task.id === id)[0].points = editPoint
  } else if (from == 2) {
    finalTaskArray.value.filter(task => task.id === id)[0].points = editPoint
  }
}

function checkNullPoint() {
  const nullPointTasks = finalTaskArray.value.filter(task => task.points === "")
  if (nullPointTasks.length != 0) {
    alertMessage.value = POINT_IS_EMPTY
    isShow.value = true
    finalTaskArray.value = finalTaskArray.value.filter(task => task.points != "")
    taskArray.value.push(nullPointTasks[0])
  }
}

function submit() {
  //TODO the point of the tasks that include in finalTaskArray cannot be null
  //TODO the total points cannot over the limitation
  //TODO check the final task array cannot be empty.

  //TODO add finalTaskArray to localStorage

  router.push({
    name: 'sprint-calendar'
  })

  console.log(finalTaskArray.value)
}

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 50)
})


</script>

<style scoped>

</style>
