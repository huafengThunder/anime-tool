<template>
  <div>
    <div class="circle-ripple"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>
<style lang="scss" scoped>
.circle-ripple {
  display: block;
  width: 120px;
  height: 120px;
  animation: ripple 0.6s linear infinite;
  border-radius: 50%;
  background-color: rgba(241, 7, 18, 0.9);
}

/* dalgalanma efekti */
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(241, 7, 18, 0.1), 0 0 0 20px rgba(241, 7, 18, 0.1),
      0 0 0 40px rgba(241, 7, 18, 0.1), 0 0 0 60px rgba(241, 7, 18, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(241, 7, 18, 0.1),
      0 0 0 40px rgba(241, 7, 18, 0.1), 0 0 0 60px rgba(241, 7, 18, 0.1),
      0 0 0 80px rgba(241, 7, 18, 0);
  }
}
</style>
