<template>
  <div class="next-button">
    <button>Next</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style lang="scss" scoped>
$font-color: #aaaebc;
.next-button {
  text-align: center;
  button {
    height: 60px;
    padding: 0px 30px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 4px;
    color: $font-color;
    background-color: #444857;
  }
}
</style>
