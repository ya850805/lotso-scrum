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
        <select :value="element.points" @change="editPoint(1, element.id, $event)">
          <option>選項</option>
          <option v-for="point in taskPointArray" :value="point">{{point}}</option>
        </select> -- {{ element.name }} -- {{ element.link }}
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
      @change="checkNullPoint"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        <select :value="element.points" @change="editPoint(2, element.id, $event)">
          <option v-for="point in taskPointArray" :value="point">{{point}}</option>
        </select> -- {{ element.name }} -- {{ element.link }}
      </div>
    </template>
  </draggable>


  <br>
  <RouterLink to="/sprint-calendar" @click="$emit('setProgressRate', 50); submit()">Submit</RouterLink>
</template>

<script setup>
import {TASK_STORY_POINTS, TASKS_KEY} from "@/constant/const";
import {onMounted, ref} from "vue";

const taskArray = ref(JSON.parse(localStorage.getItem(TASKS_KEY)))
const finalTaskArray = ref([])
const taskPointArray = ref(TASK_STORY_POINTS)

function editPoint(from, id, event) {
  const editPoint = parseInt(event.target.value)
  if (from == 1) {
    taskArray.value.filter(task => task.id = id)[0].points = editPoint
  } else if (from == 2) {
    finalTaskArray.value.filter(task => task.id = id)[0].points = editPoint
  }
}

function checkNullPoint() {
  const nullPointTasks = finalTaskArray.value.filter(task => task.points == null)
  if(nullPointTasks.length != 0) {
    alert("you had add null point task!")
    finalTaskArray.value = finalTaskArray.value.filter(task => task.points != null)
    taskArray.value.push(nullPointTasks[0])
  }
}

function submit() {
  //TODO the point of the tasks that include in finalTaskArray cannot be null
  //TODO the total points cannot over the limitation
  //TODO check the final task array cannot be empty.

  //TODO add finalTaskArray to localStorage

  console.log(finalTaskArray.value)
}

</script>

<style scoped>

</style>