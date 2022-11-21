<!--page7-->
<template>
  今天是開發B組的Retro，你也看看Retro都做什麼～會請成員提出哪些是
  做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence，
  Retro 重點在於『正面表述』，你也思考看看，哪些是適合Retro回饋吧！<br>

  <!--TODO  retro item draggable-->
<!--  <button @click="submit">Submit</button>-->
  <RouterLink to="/final" @click="submit">submit</RouterLink>
</template>

<script setup>


function submit() {
  //TODO validate retro item
  alert("12345");
}
</script>

<style scoped>

</style>
