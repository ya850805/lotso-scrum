<template>

  <section class="content-pop flex-col flex-cc">
    <div class="overlay-bg"></div>
    <div class="block-glass">
      <p class="fz-h3 w_100">{{ confirmMessage }}</p>
    </div>
    <div class="block-btn flex-cc flex-row">
      <button @click="$emit('closeAlert')" class="btn-primary">
        <p class="txt-neu fz-h2">Cancel</p>
      </button>
      <button @click="$emit('closeAlert')" class="btn-primary bg-next">
        <p class="txt-neu fz-h2">{{ confirmBtnMessage }}</p>
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps(['confirmMessage', 'confirmBtnMessage'])
</script>

<style scoped>

</style>
