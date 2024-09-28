<template>
  <div class="max-w-200px grid md:hidden px-4">
    <img width="200px" :src="slide.url" alt="" />
    <div>{{ slide.song }}</div>
    <div>{{ slide.by }}</div>
    <div>{{ slide.releasedOn }}</div>
  </div>

  <div class="max-w-400px hidden md:grid">
    <img width="400px" :src="slide.url" alt="" />
    <div>{{ slide.song }}</div>
    <div>{{ slide.by }}</div>
    <div>{{ slide.releasedOn }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  slide: Object
})
</script>

<style lang="scss" scoped></style>
