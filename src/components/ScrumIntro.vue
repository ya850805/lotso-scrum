<!--page3-->
<template>
  嗨!我是Scrum Master 小捷，
  主要是促成開發團隊協作、引導團隊進行
  自省會議，提升團隊對 Scrum 瞭解。

  我們平常管理任務是使用 Jira 這套軟體，
  有空先去註冊和熟悉唷！

  <RouterLink to="/sort-task">Next</RouterLink>
</template>

<script setup>
import {onMounted} from "vue";
const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 35)
})
</script>
<style scoped>

</style>
