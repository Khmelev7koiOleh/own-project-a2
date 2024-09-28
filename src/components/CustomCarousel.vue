<template>
  <div class="grid w-full">
    <Carousel
      class="mr-8"
      ref="carousel"
      v-model="firstScroll"
      :items-to-show="4"
      :items-to-scroll="4"
      :transition="800"
      snapAlign="start"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline">
        <SliderItem :slide="slide" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import SliderItem from './SliderItem.vue'
const props = defineProps({
  category: String,
  data: Array
})

let firstScroll = ref(0)
</script>

<style lang="scss" scoped></style>
