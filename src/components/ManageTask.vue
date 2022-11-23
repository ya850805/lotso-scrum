<!--page2-->
<template>
  請把需求放到產品待辦清單，並調整待辦的優先度順序。
  我們公司也推薦使用 Jira 來做任務的管理呢！
  <hr>

  代辦清單名稱
  <input type="text" v-model="taskName" placeholder="必填"><br>
  Jira連結
  <input type="text" v-model="taskLink" placeholder="連結"><br>
  分數
  <select v-model="taskPoint">
    <option>選項</option>
    <option v-for="point in taskPointArray" :value="point">{{point}}</option>
  </select><br>
  <button @click="addTask">Add</button>

  <hr>

  <h2>任務清單</h2>
  <draggable
      class="list-group"
      :list="taskArray1"
      group="tasks"
      itemKey="id"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{ element.points }} -- {{ element.name }} -- {{ element.link }}
        <button @click="deleteTask(element.id)">delete</button>
      </div>
    </template>
  </draggable>

  <hr>

  <h2>代辦清單排序</h2>
  <draggable
      class="list-group"
      :list="taskArray2"
      group="tasks"
      itemKey="id"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{ element.points }} -- {{ element.name }} -- {{ element.link }}
        <button @click="deleteTask(element.id)">delete</button>
      </div>
    </template>
  </draggable>

  <br>

  <XXX v-show="isShow" @closeAlert="isShow = false">
    <template></template>
  </XXX>

  <RouterLink to="/scrum-intro" @click="submit()">Submit</RouterLink>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {INIT_SCRUM_TASK, TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {TASK_NAME_IS_BLANK} from "@/constant/error";
import XXX from './theme/XXX.vue';

let taskArray1 = ref(INIT_SCRUM_TASK);
let taskArray2 = ref([])
let taskPointArray = ref(TASK_STORY_POINTS)

let taskName = ref("")
let taskLink = ref("")
let taskPoint = ref(null)

let isShow = ref(false)

function addTask() {
  //validation
  if(taskName.value.trim() === "") {
    //TODO alert
    isShow.value = true
    // alert(TASK_NAME_IS_BLANK)
  } else {
    const task = {
      id: taskArray1.value.length + taskArray2.value.length + 1,
      name: taskName,
      link: taskLink,
      points: taskPoint
    }
    taskArray1.value.push(task)
  }
}

function deleteTask(id) {
  if(taskArray1.value.filter(t => t.id == id).length > 0) {
    taskArray1.value = taskArray1.value.filter(t => t.id != id)
  } else {
    taskArray2.value = taskArray2.value.filter(t => t.id != id)
  }
}

function submit() {
  // TODO check taskArray2 is not empty
  localStorage.removeItem(TASKS_KEY)
  localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray2.value))
}

const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 25)
})


</script>

<style scoped>

</style>
