<template>
  <section class="content-pop flex-col flex-cc">
    <div class="overlay-bg"></div>
    <div class="block-glass">
      <div class="flex-row">
        <div class="flex_col">
          <p class="fz-h3">做得好的地方</p>
          <draggable
              class="list-area sprint-list flex-col flex-cs"
              :list="wellDone"
              group="retroItem"
              itemKey="id"
          >
            <template #item="{ element, index }">
              <div class="flex-row flex-cb list-group-item">
                <span class="tag-point">
                 <img v-if="element.mood === 0" width="32" height="32" src="../assets/icon/i_happy.svg"/>
                 <img v-if="element.mood === 1" width="32" height="32" src="../assets/icon/i_sad.svg"/>
                 </span>
                <p class="flex-cc">{{ element.description }}</p>
              </div>
            </template>
          </draggable>
        </div>
        <div class="flex_col">
          <p class="fz-h3">待改進的地方</p>
          <draggable
              class="list-area sprint-list flex-col flex-cs"
              :list="needImprovement"
              group="retroItem"
              itemKey="id"
          >
            <template #item="{ element, index }">
              <div class="flex-row flex-cb list-group-item">
                <span class="tag-point">
                   <img v-if="element.mood === 0" width="32" height="32" src="../assets/icon/i_happy.svg"/>
                   <img v-if="element.mood === 1" width="32" height="32" src="../assets/icon/i_sad.svg"/>
                </span>
                <p class="flex-cc">{{ element.description }}</p>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>

    <div class="block-btn flex-cc flex-row">
      <button @click="$emit('closeConfirm')" class="btn-primary">
        <p class="txt-neu fz-h2">{{ cancelBtnMessage }}</p>
      </button>
      <RouterLink to="/final">
        <div class="btn-primary bg-next">
          <p class="txt-neu fz-h2">{{ confirmBtnMessage }}</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
defineProps(['confirmMessage', 'confirmBtnMessage', 'cancelBtnMessage'])
</script>

<style scoped>

</style>
