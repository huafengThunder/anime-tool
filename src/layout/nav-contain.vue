<template>
  <div class="contain-item">
    <template v-if="animeType==='css'">
      <Loading class="animation-box" />
      <Diffuse class="animation-box" />
    </template>
    <template v-if="animeType==='canvas'">
      <Dome class="animation-box"/>
    </template>
  </div>
</template>
<script lang='ts' setup>
import Loading from '../../components-css/loading/index.vue'
import Diffuse from '../../components-css/diffuse/index.vue'
import Dome from '../../components-canvas/dome/index.vue'
import { animeTypeStore } from '@/store/index.ts'
import { storeToRefs } from 'pinia'
const store = animeTypeStore()
const { animeType } = storeToRefs(store)

</script>
<style lang="scss" scoped>
.animation-box {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.contain-item {
  height: calc(95vh - 40px - 60px);
  color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
}

@media (max-width: 1200px) {
  .contain-item {
    height: calc(95vh - 40px - 60px);
    color: #fff;
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(2, 50%);
  }
}
</style>
