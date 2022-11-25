<!--page7-->
<template>
  <section class="flex-col">
    <div class="flex-row">
      <img src="../assets/images/img_master_chat.png" width="158" height="158" class="img-chat"/>
      <ChatTheme>
        <template #text>
          今天是開發B組的Retro，你也看看Retro都做什麼～會請成員提出哪些是<br>
          做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence，<br>
          Retro 重點在於『正面表述』，你也思考看看，哪些是適合Retro回饋吧！<br>
        </template>
      </ChatTheme>
    </div>

    <draggable
        class="list-group flex-row flex-ss flex-wrap"
        :list="retroItems"
        group="retroItem"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">
          {{ element.mood }} -- {{ element.description }}
        </div>
      </template>
    </draggable>

    <hr>
    <h2>做得好的地方</h2>
    <draggable
        class="list-group"
        :list="wellDone"
        group="retroItem"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">
          {{ element.mood }} -- {{ element.description }}
        </div>
      </template>
    </draggable>

    <hr>
    <h2>待改進的地方</h2>
    <draggable
        class="list-group"
        :list="needImprovement"
        group="retroItem"
        itemKey="id"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">
          {{ element.mood }} -- {{ element.description }}
        </div>
      </template>
    </draggable>

    <hr>
    <!--TODO  retro item draggable-->
    <!--  <button @click="submit">Submit</button>-->
<!--    <RouterLink to="/final" @click="submit">submit</RouterLink>-->
    <button @click="submit" class="btn-primary bg-next animate__pulse">
      <p class="txt-neu fz-h2">Submit</p>
    </button>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {RETRO_ITEMS} from "@/constant/const";
import {onMounted} from "vue";
import AlertTheme from './theme/AlertTheme.vue';
import ChatTheme from "./theme/ChatTheme.vue"
import {useRouter} from "vue-router/dist/vue-router";

const retroItems = ref(RETRO_ITEMS)
const wellDone = ref([])
const needImprovement = ref([])

function submit() {
  //TODO validate retro item
  alert("12345");
  // router.push({
  //   name: 'final'
  // })
}


const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 90)
})
</script>

<style scoped>

</style>
