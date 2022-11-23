<!--page5-->
<template>
  我是開發子能，Sprint是一個短衝，團隊會在這期間執行開發，舉辦每日
  站立會議(Daily Scrum)，追蹤成員工作狀況，在Sprint結束也包含
  短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)
  <RouterLink to="/sprint-process" @click="$emit('setProgressRate', 60)">Next</RouterLink>
</template>

<script setup>
import {onMounted} from "vue";
const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 60)
})
</script>

<style scoped>

</style>
