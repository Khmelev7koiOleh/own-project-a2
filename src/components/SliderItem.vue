<template>
  <div>
    <img :src="slide.url" alt="" />
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
