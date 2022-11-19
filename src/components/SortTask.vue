<!--page4-->
<template>
  目前我們團隊一次 Sprint 週期是兩週的時間，依照我
  的觀察，目前團隊可以負擔的點數(Sprint Point) 大約是 20 點左右。
  <br>
  你來練習把任務排到短衝待辦清單吧！請在「？」給予對應點數(Sprint Point)吧！
  點數共有1 、2 、3 、5 、8 、13 、21，Point越大，代表花費時間越多~
  <br>

  <ol>
    <ul v-for="task in taskArray">
      {{task.points}}--{{task.name}}--{{task.link}}
    </ul>
  </ol>

  <br>
  <RouterLink to="/sprint-calendar" @click="$emit('setProgressRate', 50)">Submit</RouterLink>
</template>

<script setup>
import {TASKS_KEY} from "@/constant/const";
import {onMounted, ref} from "vue";
let taskArray = ref(JSON.parse(localStorage.getItem(TASKS_KEY)))
</script>

<style scoped>

</style>