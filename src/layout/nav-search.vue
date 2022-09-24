<template>
  <div class="search-nav">
    <select class="search-select" @change="change">
      <option value="css">css</option>
      <option value="canvas">canvas</option>
    </select>
    <div class="search-content">
      <svg viewBox="0 0 56.7 56.7" class="search-icon">
        <path
          d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z">
        </path>
      </svg>
      <input class="search-input" type="text">
    </div>
  </div>
</template>
<script lang='ts' setup>
import { animeTypeStore } from '../store/index.ts'
const store = animeTypeStore()
function change(event:Event) {
  if (event) {
    store.changeState(event.target.value)
  }
}
</script>

<style scoped lang="scss">
$search-nav-height: 5vh;
$font-size: 20px;
$background-color: #252830;
$font-color: #aaaebc;

.search-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.search-select {
  width: 130px;
  padding: 0 20px;
  height: $search-nav-height;
  font-size: $font-size;
  font-weight: 700;
  border-right: 1px solid #333;
  border-radius: 4px 0 0 4px;
  color: $font-color;
  background-color: $background-color;
}
.search-content {
  flex: 1;
  position: relative;
  height: $search-nav-height;
}
.search-input {
  width: 100%;
  height: 100%;
  padding-left: 60px;
  color: #fff;
  border-radius: 0 4px 4px 0;
  font-size: $font-color;
  background-color: $background-color;
}
.search-icon {
  position: absolute;
  width: 20px;
  height: 100%;
  margin-left: 20px;
  fill: $font-color;
}
</style>
