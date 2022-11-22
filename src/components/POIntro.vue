<!--page1-->
<template>
  我是 熊抱科技，開發 A 組的 PO。
  PO 也就是產品負責人（Product Owner）!
  <RouterLink to="/manage-task" @click="$emit('setProgressRate', 20)">Next</RouterLink>
</template>

<script setup>
import {onMounted} from "vue";
const emit = defineEmits(['setProgressRate'])

onMounted(() => {
  emit('setProgressRate', 10)
})
</script>

<style scoped>

</style>