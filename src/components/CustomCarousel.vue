<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import SliderItem from './SliderItem.vue'
const props = defineProps({
  category: String,
  data: Array
})

let currentSlide = ref(0)

// const forwardOrBackward = (val) => {
//   if (!val) {
//     firstScroll = firstScroll.value + 2
//   } else {
//     firstScroll = firstScroll.value - 2
//   }
// }
const slideTo = (val) => {
  if (val) {
    currentSlide.value = currentSlide.value + 1
  }
  if (!val) {
    currentSlide.value = currentSlide.value - 1
  }
}
</script>

<template>
  <div class="w-screen md:hidden">
    <div class="flex justify-between">
      <div class="p-8 text-3xl text-red-600 font-semibold underline">New line</div>
      <div class="flex justify-between p-8">
        <button class="px-1">
          <ChevronLeft @click="slideTo(false)" fillColor="#000000" :size="40" />
        </button>
        <button class="px-1">
          <ChevronRight @click="slideTo(true)" fillColor="#000000" :size="40" />
        </button>
      </div>
    </div>
    <div class="flex justify-between p-4"></div>
    <Carousel
      class="mr-0"
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="2"
      :items-to-scroll="1"
      :transition="800"
      snapAlign="start"
      wrap-around="true"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline">
        <SliderItem :slide="slide" />
      </Slide>
    </Carousel>
  </div>

  <div class="md:grid hidden w-screen">
    <div class="flex justify-between p-8">
      <div class="p-8 text-3xl text-red-600 font-semibold underline">New line</div>
      <div class="p-8">
        <button class="px-1">
          <ChevronLeft @click="slideTo(false)" fillColor="#000000" :size="50" />
        </button>
        <button class="px-1">
          <ChevronRight @click="slideTo(true)" fillColor="#000000" :size="50" />
        </button>
      </div>
    </div>

    <Carousel
      class="mr-0"
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="3"
      :items-to-scroll="1"
      :transition="800"
      snapAlign="start"
      wrap-around="true"
    >
      <Slide v-for="slide in data" :key="slide" class="flex items-baseline">
        <SliderItem :slide="slide" />
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped></style>
