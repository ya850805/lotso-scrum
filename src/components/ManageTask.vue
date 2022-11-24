<!--page2-->
<template>
  <section class="flex-col">
    <div class="flex-row">
      <img src="../assets/images/img_po_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme>
        <template #text>
          請把需求放到產品待辦清單，並調整待辦的優先度順序。<br>
          我們公司也推薦使用 Jira 來做任務的管理呢！
        </template>
      </ChatTheme>
    </div>

    <div class="flex-row block-glass flex-cb">
      <div class="flex_col">
        <p>*待辦清單名稱</p>
        <input type="text" v-model="taskName" placeholder="必填" class="card-tag">
      </div>
      <div class="flex_col">
        <p>Jira連結</p>
        <input type="text" v-model="taskLink" placeholder="選填" class="card-tag">
      </div>
      <div class="flex_col">
        <p>分數</p>

        <!--//TODO select-->
        <!--        <div class="select_group">-->
        <!--          <div class="form_title">div下拉選單</div>-->
        <!--          <div class="select_style"><span>請選擇</span></div>-->
        <!--          <div class="select_dropdown">-->
        <!--            <div class="select_option">選項1</div>-->
        <!--            <div class="select_option">選項2</div>-->
        <!--            <div class="select_option">選項3</div>-->
        <!--            <div class="select_option">選項4</div>-->
        <!--            <div class="select_option">選項5</div>-->
        <!--          </div>-->
        <!--          <div class="select_overlay"></div>    </div>-->


        <select v-model="taskPoint" class="card-tag">
          <option value=null>選項</option>
          <option v-for="point in taskPointArray" :value="point">{{ point }}</option>
        </select>
      </div>
      <button @click="addTask" class="btn-sec"><p class="fz-h3">ADD</p></button>
    </div>

    <draggable
        class="list-group flex-row flex-wrap"
        :list="taskArray1"
        group="tasks"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="flex-row flex-cb list-group-item">
          <span class="tag-point">
            <p class="flex-cc">{{ element.points }}</p></span>
          <p class="flex-cc">{{ element.name }}</p>
          <button @click="element.isToggleOpen = !element.isToggleOpen">
            <i class="i-more"
               :style="{ 'background-image' : element.isToggleOpen? 'url(src/assets/icon/i_back.svg)' : 'url(src/assets/icon/i_more.svg)' }"></i>
          </button>

          <div v-show="element.isToggleOpen" class="item-more slideInLeft flex-row flex-cc">
            <a href="{{ element.link }}"><i class="i-link"></i></a>
            <button @click="deleteTask(element.id)"><i class="i-delete"></i></button>
          </div>

        </div>
      </template>
    </draggable>

    <div class="block-info flex-col flex-cc">
      <div class="flex-row flex-cb w-100">
        <p class="fz-h2">待辦清單排序</p>
        <i class="i-po"></i>
      </div>

      <p>優先度高</p>

      <draggable class="list-area flex-col flex-cs"
                 :list="taskArray2"
                 group="tasks"
                 itemKey="id">

        <template #item="{ element, index }">
          <div class="flex-row flex-cb list-group-item">
            <span class="tag-point"><p class="flex-cc">{{ element.points }}</p></span>
            <p class="flex-cc">{{ element.name }}</p>
            <a href="{{ element.link }}"><i class="i-link"></i></a>
          </div>
        </template>
      </draggable>

      <p>優先度低</p>

      <!--      <RouterLink to="/scrum-intro" @click="submit">-->
      <!--        <div class="btn-primary bg-next animate__pulse">-->
      <!--          <p class="txt-neu fz-h2">Submit</p>-->
      <!--        </div>-->
      <!--      </RouterLink>-->

      <button @click="submit">
        <div class="btn-primary bg-next animate__pulse">
          <p class="txt-neu fz-h2">Submit</p>
        </div>
      </button>
    </div>

    <XXX v-show="isShow" @closeAlert="isShow = false" :alertMessage="alertMessage" :alert-btn-message="alertBtnMessage">
      <template></template>
    </XXX>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {INIT_SCRUM_TASK, TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {ORDER_IS_EMPTY, TASK_NAME_IS_BLANK} from "@/constant/error";
import XXX from './theme/XXX.vue';
import ChatTheme from "./theme/ChatTheme.vue"

let taskArray1 = ref(INIT_SCRUM_TASK);
let taskArray2 = ref([])
let taskPointArray = ref(TASK_STORY_POINTS)

let taskName = ref("")
let taskLink = ref("")
let taskPoint = ref(null)

//is alert show
let isShow = ref(false)

let alertMessage = ref("")
let alertBtnMessage = ref("OK")

function addTask() {
  //validation
  if (taskName.value.trim() === "") {
    //TODO alert
    isShow.value = true
    alertMessage.value = TASK_NAME_IS_BLANK
    // alert(TASK_NAME_IS_BLANK)
  } else {
    const task = {
      id: taskArray1.value.length + taskArray2.value.length + 1,
      name: taskName.value,
      link: taskLink,
      points: taskPoint,
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
    //TODO alert
    isShow.value = true
    alertMessage.value = ORDER_IS_EMPTY
  } else {
    // TODO check taskArray2 is not empty
    localStorage.removeItem(TASKS_KEY)
    localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray2.value))
  }
}

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 25)
})


</script>

<style scoped>

</style>
