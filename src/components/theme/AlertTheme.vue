<template>

  <section class="content-pop flex-col flex-cc">
    <div class="overlay-bg"></div>
    <div class="block-glass">
      <p class="fz-h3 w_100">{{ alertMessage }}</p>
    </div>
    <div class="block-btn flex-cc flex-row">
      <button @click="$emit('closeAlert')" class="btn-primary">
        <p class="txt-neu fz-h2">{{ alertBtnMessage }}</p>
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps(['alertMessage', 'alertBtnMessage'])
</script>

<style scoped>

</style>
