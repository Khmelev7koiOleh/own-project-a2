<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

import { useThisStore } from './stores/pinia'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const useThis = useThisStore()
const { openForm, openFormLog } = storeToRefs(useThis)

const route = useRoute()

const SideMenu = ref(false)
const isFullScreenRoute = route.meta.fullScreen
// const openFormFunc = (val) => {
//   if (val) {
//     openForm.value = openForm.value = true
//   }
// }
</script>

<template>
  <!-- <section>
    <div><Register v-if="openForm" /></div>
  </section> -->
  <section class="relative w-screen h-full overflow-hidden">
    <!-- <div
        class="bg-gradient-to-r from-yellow-400 to-green-400 h-screen w-screen flex md:hidden"
      ></div> -->
    <RouterView class="z-20 h-screen w-full overflow-auto" />
  </section>
</template>

<style scoped></style>
