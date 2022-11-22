 <!--page6-->
<template>
  Sprint 流程記憶大考驗
  那你來試試把會議拖曳到對應的區域內吧！
  <hr>
  <draggable
      class="list-group"
      :list="meetings"
      group="meeting"
      itemKey="id"
      @start="startDrag(0)"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{element.name}}
      </div>
    </template>
  </draggable>

  <hr>
  <h2>Daily Scrum</h2>
  <draggable
      class="list-group"
      :list="daily"
      group="meeting"
      itemKey="id"
      @start="startDrag(1)"
      @change="moveMeeting(1)"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{element.name}}
      </div>
    </template>
  </draggable>

  <hr>
  <h2>Sprint Review</h2>
  <draggable
      class="list-group"
      :list="review"
      group="meeting"
      itemKey="id"
      @start="startDrag(2)"
      @change="moveMeeting(2)"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{element.name}}
      </div>
    </template>
  </draggable>

  <hr>
  <h2>Sprint Retrospective</h2>
  <draggable
      class="list-group"
      :list="retrospective"
      group="meeting"
      itemKey="id"
      @start="startDrag(3)"
      @change="moveMeeting(3)"
  >
    <template #item="{ element, index }">
      <div class="list-group-item">
        {{element.name}}
      </div>
    </template>
  </draggable>

  <hr>
  <button @click="submit()">Submit</button>
</template>

<script setup>
import {SPRINT_MEETINGS} from "@/constant/const";
import {ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";

const meetings = ref(SPRINT_MEETINGS)
const daily = ref([])
const review = ref([])
const retrospective = ref([])
let fromBlock
const router = useRouter()

function startDrag(from) {
  fromBlock = from
}

function moveMeeting(to) {
  console.log(daily.value.length)
  if(to == 1 && daily.value.length == 2) {
    addToFrom(daily.value[0])
    daily.value.splice(0, 1)
  } else if (to == 2 && review.value.length == 2) {
    addToFrom(review.value[0])
    review.value.splice(0, 1)
  } else if (to == 3 && retrospective.value.length == 2) {
    addToFrom(retrospective.value[0])
    retrospective.value.splice(0, 1)
  }
}

function addToFrom(element) {
  if(fromBlock == 0) {
    meetings.value.push(element)
  } else if(fromBlock == 1) {
    daily.value.push(element)
  } else if (fromBlock == 2) {
    review.value.push(element)
  } else if (fromBlock == 3) {
    retrospective.value.push(element)
  }
}

function submit() {
  //TODO validate every meeting's position is correct or not
  router.push({
    name: 'retro-item'
  })
}

</script>

<style scoped>

</style>
