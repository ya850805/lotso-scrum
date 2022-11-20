<!--page4-->
<template>
  目前我們團隊一次 Sprint 週期是兩週的時間，依照我
  的觀察，目前團隊可以負擔的點數(Sprint Point) 大約是 20 點左右。
  <br>
  你來練習把任務排到短衝待辦清單吧！請在「？」給予對應點數(Sprint Point)吧！
  點數共有1 、2 、3 、5 、8 、13 、21，Point越大，代表花費時間越多~

  <hr>
  你來練習把任務排到短衝待辦清單吧！請在「？」給予對應點數(Sprint Point)吧！
  點數共有1 、2 、3 、5 、8 、13 、21，Point越大，代表花費時間越多~<br><br>

  <draggable
      class="list-group"
      :list="taskArray"
      group="tasks"
      itemKey="id"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{ element.points }} -- {{ element.name }} -- {{ element.link }}
      </div>
    </template>
  </draggable>

  <hr>

  <h2>開發A組 短衝待辦清單 21點/5人</h2>
  <draggable
      class="list-group"
      :list="finalTaskArray"
      group="tasks"
      itemKey="id"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{ element.points }} -- {{ element.name }} -- {{ element.link }}
      </div>
    </template>
  </draggable>


  <br>
  <RouterLink to="/sprint-calendar" @click="$emit('setProgressRate', 50); submit()">Submit</RouterLink>
</template>

<script setup>
import {TASKS_KEY} from "@/constant/const";
import {onMounted, ref} from "vue";
let taskArray = ref(JSON.parse(localStorage.getItem(TASKS_KEY)))
let finalTaskArray = ref([])

function submit() {
  //TODO the point of the tasks that include in finalTaskArray cannot be null
  //TODO the total points cannot over the limitation
  //TODO check the final task array cannot be empty.
}

//TODO edit task's point

</script>

<style scoped>

</style>