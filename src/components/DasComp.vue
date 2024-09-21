<template>
  <div class="flex w-full gap-0">
    <img :src="image" :width="size" alt="" />
    <div class="flex items-center justify-between">
      <div class="max-w-[50%]">
        <div class="text-3xl flex items-center justify-center font-bold p-2">{{ title }}</div>
        <div class="text-gray-600 p-1">{{ text }}</div>
        <div class="font-light text-sm text-gray-400">{{ subtext }}</div>
        <button class="rounded-lg px-4 py-3 bg-green-700 my-6 text-white fond-semibold">
          {{ button }}
        </button>
      </div>
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
