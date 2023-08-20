<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
  @import 'normalize.css'
  /** 这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服 */
  #app {
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }
</style>
