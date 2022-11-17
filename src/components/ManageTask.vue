<!--page2-->
<template>
  請把需求放到產品待辦清單，並調整待辦的優先度順序。
  我們公司也推薦使用 Jira 來做任務的管理呢！
  <RouterLink to="/scrum-intro" @click="$emit('setProgressRate', 30)">Next</RouterLink>
</template>

<script setup>
import {onMounted} from "vue";
import {TASKS_KEY} from "@/constant/const";

onMounted(() => {
  const taskArray = []
  localStorage.setItem(TASKS_KEY, JSON.stringify(taskArray))
})
</script>

<style scoped>

</style>