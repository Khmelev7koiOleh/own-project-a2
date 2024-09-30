<template>
  <div class="w-full h-auto gap-4 sm:hidden">
    <div class="flex items-center justify-between">
      <div class="w-auto">
        <div class="text-3xl font-bold p-2">{{ title }}</div>
        <img :src="image" :width="size" alt="" class="rounded-md" />
        <div class="text-gray-600 p-1">{{ text }}</div>
        <div class="font-light text-sm text-gray-400">{{ subtext }}</div>
        <button class="rounded-lg px-4 py-3 bg-green-700 my-6 text-white fond-semibold">
          {{ button }}
        </button>
      </div>
    </div>
  </div>

  <div class="relative w-full h-auto gap-4 hidden sm:flex sm:flex-row flex-col">
    <img :src="image" :width="size" alt="" class="rounded-md w-full h-auto" />
    <div class="absolute inset-0 flex flex-col justify-center items-center p-4 z-10">
      <div class="text-2xl font-bold text-white">
        {{ title }}
      </div>
      <div class="text-gray-100 text-sm mt-1">
        {{ text }}
      </div>
      <div class="font-light text-sm text-gray-200">
        {{ subtext }}
      </div>
      <button class="rounded-lg px-4 py-3 bg-green-700 my-4 text-white font-semibold">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  text: String,
  subtext: String,
  button: String,
  size: String
})
</script>

<style lang="scss" scoped></style>
