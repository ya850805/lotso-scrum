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
  <button @click="addTask()">Add</button>

  <hr>

  <draggable
      class="list-group"
      :list="taskArray"
      group="people"
      itemKey="name"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{ element.points }} -- {{ element.name }} -- {{ element.link }}
        <button @click="deleteTask(element.id)">delete</button>
      </div>
    </template>
  </draggable>

  <br>
  <RouterLink to="/scrum-intro" @click="$emit('setProgressRate', 30); refreshLocalStorage()">Submit</RouterLink>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {INIT_SCRUM_TASK, TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {TASK_NAME_IS_BLANK} from "@/constant/error";

let taskArray = ref(INIT_SCRUM_TASK);
let taskPointArray = ref(TASK_STORY_POINTS)

let taskName = ref("")
let taskLink = ref("")
let taskPoint = ref(null)

//TODO manage tasks - Add, Delete, Edit

function addTask() {
  //validation
  if(taskName.value.trim() === "") {
    alert(TASK_NAME_IS_BLANK)
  } else {
    const task = {
      id: taskArray.value.length + 1,
      name: taskName,
      link: taskLink,
      points: taskPoint
    }
    taskArray.value.push(task)
  }
}

function deleteTask(id) {
  taskArray.value = taskArray.value.filter(t => t.id != id)
}

function refreshLocalStorage() {
  localStorage.removeItem(TASKS_KEY)
  localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray.value))
}
</script>

<style scoped>

</style>