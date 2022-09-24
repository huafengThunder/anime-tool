<template>
  <div>
    <NavSearch />
    <NavContain />
    <NavBottom />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import NavSearch from './nav-search.vue'
import NavContain from './nav-contain.vue'
import NavBottom from './nav-bottom.vue'
export default defineComponent({
  components: {
    NavSearch,
    NavContain,
    NavBottom,
  },
})
</script>
