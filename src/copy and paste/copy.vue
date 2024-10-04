<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import Header from './components/Header.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import DasComp from './components/DasComp.vue'
import DieComp from './components/DieComp.vue'

import CustomCarousel from './components/CustomCarousel.vue'
import DerComp from './components/DerComp.vue'
import SignUp from './forms/SignUp.vue'
import { useThisStore } from './stores/pinia'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import Register from './views/Register.vue'
import HomeView from './views/HomeView.vue'
const useThis = useThisStore()
const { openForm, openFormLog } = storeToRefs(useThis)

const route = useRoute()
onMounted(() => {
  openForm.value = false
})

const SideMenu = ref(false)

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

  <div class="w-screen h-full overflow-hidden">
    <!-- <div
        class="bg-gradient-to-r from-yellow-400 to-green-400 h-screen w-screen flex md:hidden"
      ></div> -->
    <RouterView class="z-20 h-screen w-full overflow-auto" />
  </div>
</template>

<style scoped></style>
