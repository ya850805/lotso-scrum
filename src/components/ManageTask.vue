<!--page2-->
<template>
  請把需求放到產品待辦清單，並調整待辦的優先度順序。
  我們公司也推薦使用 Jira 來做任務的管理呢！


  <RouterLink to="/scrum-intro" @click="$emit('setProgressRate', 30); refreshLocalStorage()">Submit</RouterLink>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {INIT_SCRUM_TASK, TASKS_KEY} from "@/constant/const";

let taskArray;

onMounted(() => {
  taskArray = ref(INIT_SCRUM_TASK)
})

//TODO manage tasks - Add, Delete, Edit

function refreshLocalStorage() {
  localStorage.removeItem(TASKS_KEY)
  localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray.value))
}
</script>

<style scoped>

</style>