<template>
  <div class="w-screen md:hidden">
    <Carousel
      class="mr-0"
      ref="carousel"
      v-model="firstScroll"
      :items-to-show="2"
      :items-to-scroll="1"
      :transition="800"
      snapAlign="start"
      wrap-around="true"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline gap-2">
        <SliderItem :slide="slide" />
      </Slide>
    </Carousel>
  </div>

  <div class="md:grid hidden">
    <Carousel
      class="mr-0"
      ref="carousel"
      v-model="firstScroll"
      :items-to-show="3"
      :items-to-scroll="1"
      :transition="800"
      snapAlign="start"
      wrap-around="true"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline gap-2">
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
