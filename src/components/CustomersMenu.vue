<template>
  <div class="grid justify-start gap-2 pt-4">
    <button
      type="button"
      @click="(openMenu = !openMenu), (switchIcon = !switchIcon)"
      class="flex justify-start items-center text-xl font-semibold gap-4 hover:text-gray-500"
    >
      <Plus v-if="!switchIcon" fillColor="#00000" :size="25" />
      <Close v-if="switchIcon" fillColor="#00000" :size="25" />
      Menu
    </button>
    <ul v-if="openMenu" class="flex flex-col justify-start items-end py-4">
      <li class="text-black text-sm font-light">Today's best</li>
      <img
        width="120"
        class="relative bottom-2 right-0"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-black text-sm font-light">Food-Set</li>
      <img
        width="120"
        class="relative bottom-2 right-0"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-black text-sm font-light">Popular</li>
      <img
        width="120"
        class="relative bottom-2 right-0"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
      <li class="text-red-700 text-sm font-bold underline underline-offset-4">Special offer</li>
      <img
        width="120"
        class="relative bottom-2 right-0"
        src="/img/rotated_french_fry_180__1_-removebg-preview (1).png"
        alt=""
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Close from 'vue-material-design-icons/Close.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
let openMenu = ref(false)
let switchIcon = ref(false)
</script>

<style lang="scss" scoped></style>
