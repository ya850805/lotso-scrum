<!--page2-->
<template>
  <section class="flex-col">
    <i class="bg-ball-3"></i>
    <img src="../assets/icon/i_jira.svg" width="145" height="57" class="i-confluence"/>
    <div class="flex-row">
      <img src="../assets/images/img_po_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme class="animate__bounceIn">
        <template #text>
          請把需求放到產品待辦清單，並調整待辦的優先度順序。<br>
          我們公司也推薦使用 Jira 來做任務的管理呢！
        </template>
      </ChatTheme>
    </div>

    <div class="flex-row block-glass flex-cb animate__fadeInLeft">
      <div class="flex_col">
        <p>*待辦清單名稱</p>
        <input type="text" v-model="taskName" placeholder="必填" class="card-tag">
      </div>
      <div class="flex_col">
        <p>Jira連結</p>
        <input type="text" v-model="taskLink" placeholder="選填" class="card-tag">
      </div>
      <div class="flex_col">
        <p>點數</p>
        <select v-model="taskPoint" class="card-tag">
          <option value="">選項</option>
          <option v-for="point in taskPointArray" :value="point">{{ point }}</option>
        </select>
      </div>
      <button @click="addTask" class="btn-sec"><p class="fz-h3">ADD</p></button>
    </div>

    <draggable
        class="list-group flex-row flex-ss flex-wrap animate__fadeInLeft"
        :list="taskArray1"
        group="tasks"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="flex-row flex-cb list-group-item">
          <span class="tag-point">
            <p class="flex-cc">{{ element.points === "" ? '?' : element.points }}</p></span>
          <p class="flex-cc">{{ element.name }}</p>
          <button @click="element.isToggleOpen = !element.isToggleOpen">
            <i class="i-more"
               :style="{ 'background-image' : element.isToggleOpen? `url(${backIcon})` : `url(${moreIcon})` }"></i>
          </button>

          <div v-show="element.isToggleOpen" class="item-more slideInLeft flex-row flex-cc">
            <a :href="element.link" target="_blank"><i class="i-link"></i></a>
            <button @click="deleteTask(element.id)"><i class="i-delete"></i></button>
          </div>

        </div>
      </template>
    </draggable>

    <div class="block-info flex-col flex-cc animate__fadeInRight">
      <div class="flex-row flex-cb w-100">
        <p class="fz-h2">待辦清單排序</p>
        <i class="i-order"></i>
      </div>
      <p>優先度高</p>

      <div class="order-list">
        <i class="i-drag-arrow"></i>

        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
        <div class="list-group-item"></div>
      </div>
      <draggable class="list-area flex-col flex-cs"
                 :list="taskArray2"
                 group="tasks"
                 itemKey="id">

        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <span class="tag-point"><p class="flex-cc">{{ element.points === "" ? '?' : element.points }}</p></span>
            <p class="flex-cc">{{ element.name }}</p>
            <a :href="element.link" target="_blank"><i class="i-link"></i></a>
          </div>
        </template>
      </draggable>
      <p>優先度低</p>
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
import {onMounted, ref} from "vue";
import {INIT_SCRUM_TASK, TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {BTN_OK, ORDER_IS_EMPTY, TASK_LINK_IS_INVALID, TASK_NAME_IS_BLANK} from "@/constant/error";
import AlertTheme from './theme/AlertTheme.vue';
import ChatTheme from "./theme/ChatTheme.vue"
import {useRouter} from "vue-router/dist/vue-router";
import backIcon from '@/assets/icon/i_back.svg'
import moreIcon from '@/assets/icon/i_more.svg'

const router = useRouter()

let taskArray1 = ref([].concat(INIT_SCRUM_TASK));
let taskArray2 = ref([])
let taskPointArray = ref(TASK_STORY_POINTS)

let taskName = ref("")
let taskLink = ref("")
let taskPoint = ref("")

//is alert show
let isShow = ref(false)

let alertMessage = ref("")
let alertBtnMessage = ref(BTN_OK)

function addTask() {
  //validation
  if (taskName.value.trim() === "") {
    alertMessage.value = TASK_NAME_IS_BLANK
    isShow.value = true
  } else if (taskLink.value.trim() != "" && !taskLink.value.startsWith("http://") && !taskLink.value.startsWith("https://")) {
    alertMessage.value = TASK_LINK_IS_INVALID
    isShow.value = true
  } else {
    const task = {
      id: taskArray1.value.length + taskArray2.value.length + 1,
      name: taskName.value,
      link: taskLink.value,
      points: taskPoint.value,
      isToggleOpen: false
    }
    taskArray1.value.push(task)
  }
}

function deleteTask(id) {
  if (taskArray1.value.filter(t => t.id == id).length > 0) {
    taskArray1.value = taskArray1.value.filter(t => t.id != id)
  } else {
    taskArray2.value = taskArray2.value.filter(t => t.id != id)
  }
}

function submit() {
  if (taskArray2.value.length === 0) {
    alertMessage.value = ORDER_IS_EMPTY
    isShow.value = true
  } else {
    localStorage.removeItem(TASKS_KEY)
    localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray2.value))
    router.push({
      name: 'scrum-intro'
    })
  }
}

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 25)
})


</script>

<style scoped>

</style>
