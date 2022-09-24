<template>
  <LayOut />
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import LayOut from './layout/nav-index.vue'
export default defineComponent({
  components: {
    LayOut
  }
})
</script>
<style scoped lang="scss">
#root {
  color: #fff;
}
</style>
