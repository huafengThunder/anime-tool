<template>
  <div>
    <div class="loading"></div>
    <div class="loading-title">加载中</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>
<style lang="scss" scoped>
.loading {
  position: relative;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, transparent, transparent, 75%, #e5f403);
  border-radius: 50%;
  animation: animate 2s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

.loading::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  bottom: 8px;
  right: 8px;
  background-color: #000;
  border-radius: 50%;
  z-index: 2;
}

.loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent, 75%, #e5f403);
  border-radius: 50%;
  z-index: 1;
  filter: blur(30px);
}

.loading-title {
  position: absolute;
  font-size: 18px;
  color: white;
  animation: title-animation 2s linear infinite;
}

@keyframes title-animation {
  0% {
    color: #fff;
    filter: blur(1px) hue-rotate(0deg);
    text-shadow: 0 0 10px #e5f403 0 0 20px #e5f403 0 0 40px #e5f403;
  }

  100% {
    filter: blur(1px) hue-rotate(360deg);
    color: #fff;
    text-shadow: 0 0 10px #e5f403 0 0 20px #e5f403 0 0 40px #e5f403;
  }
}
</style>