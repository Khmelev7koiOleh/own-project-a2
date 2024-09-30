<template>
  <div class="max-w-300px grid md:hidden px-4">
    <img width="300px" :src="slide.url" alt="" />
    <div>{{ slide.song }}</div>
    <div>{{ slide.by }}</div>
    <div>{{ slide.releasedOn }}</div>
  </div>

  <div class="max-w-400px hidden md:flex md:flex-col md:items-center">
    <img width="400px" :src="slide.url" alt="" />
    <div class="pl-4 font-bold text-xl">{{ slide.song }}</div>
    <div>{{ slide.by }}</div>
    <div class="text-red-400 underline">{{ slide.releasedOn }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  slide: Object
})
</script>

<style lang="scss" scoped></style>
