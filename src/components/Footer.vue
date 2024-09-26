<template>
  <div class="w-screen h-full hidden md:grid">
    <div class="flex justify-around items-baseline">
      <!-- About Us Section -->
      <div class="flex flex-col">
        <div class="font-bold text-black text-base py-4">About us</div>
        <ul>
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Recalls & Alerts</li>
          <li class="text-base text-black font-light">Real Estate</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News & Notifications</li>
        </ul>
      </div>

      <!-- Services Section -->
      <div class="flex flex-col">
        <div class="font-bold text-black text-base py-4">Services</div>
        <ul>
          <li class="text-base text-black font-light">Services Overview</li>
          <li class="text-base text-black font-light">Wi-Fi</li>
          <li class="text-base text-black font-light">PlayPlaces & Parties</li>
          <li class="text-base text-black font-light">Mobile Order & Pay</li>
          <li class="text-base text-black font-light">Trending Now</li>
          <li class="text-base text-black font-light">McDonald’s Merchandise</li>
          <li class="text-base text-black font-light">Family Fun Hub</li>
          <li class="text-base text-black font-light">MyMcDonald's Rewards</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">McCafé®</li>
        </ul>
      </div>

      <!-- Community Section -->
      <div class="flex flex-col">
        <div class="font-bold text-black text-base py-4">Community</div>
        <ul>
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Recalls & Alerts</li>
          <li class="text-base text-black font-light">Real Estate</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News & Notifications</li>
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">Something</li>
        </ul>
      </div>

      <!-- Contact Us Section -->
      <div class="flex flex-col">
        <div class="font-bold text-black text-base py-4">Contact Us</div>
        <ul>
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News</li>
        </ul>
      </div>
    </div>

    <!-- Social Media & App Download Icons -->
    <div class="p-8"></div>
    <div class="w-screen h-auto flex items-center justify-around">
      <div class="flex items-center justify-around gap-4">
        <img src="/img/facebook.png" alt="Facebook" />
        <img src="/img/x.png" alt="X" />
        <img src="/img/youtube.png" alt="YouTube" />
        <img src="/img/instagram.png" alt="Instagram" />
        <img src="/img/tumblr.png" alt="Tumblr" />
        <img src="/img/spotify.png" alt="Spotify" />
      </div>
      <div class="flex items-center justify-around gap-8">
        <img src="/img/app_store_badge.png" alt="App Store" />
        <img src="/img/DownloadApp_Googleplay_154x40.png" alt="Google Play" />
      </div>
    </div>
  </div>

  <div class="border-b border-b-gray-300 py-8"></div>
  <div class="p-8"></div>

  <!-- For phone -->

  <div class="w-screen h-full md:hidden grid">
    <div class="flex justify-around items-baseline flex-col">
      <!-- About Us Section -->
      <div class="flex flex-col w-screen h-auto">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">About us</div>
          <button @click="OpenAndClose = !OpenAndClose" type="button">
            <Close fillColor="#00000" :size="30" />
          </button>
        </div>

        <ul v-if="OpenAndClose" class="p-1 grid grid-rows-10">
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Recalls & Alerts</li>
          <li class="text-base text-black font-light">Real Estate</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News & Notifications</li>
        </ul>
      </div>

      <!-- Services Section -->
      <div class="flex flex-col w-screen h-auto">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Services</div>
          <button @click="OpenAndClose = !OpenAndClose" type="button">
            <Close fillColor="#00000" :size="30" />
          </button>
        </div>

        <ul v-if="OpenAndClose" class="p-1 grid grid-rows-10">
          <li class="text-base text-black font-light">Services Overview</li>
          <li class="text-base text-black font-light">Wi-Fi</li>
          <li class="text-base text-black font-light">PlayPlaces & Parties</li>
          <li class="text-base text-black font-light">Mobile Order & Pay</li>
          <li class="text-base text-black font-light">Trending Now</li>
          <li class="text-base text-black font-light">McDonald’s Merchandise</li>
          <li class="text-base text-black font-light">Family Fun Hub</li>
          <li class="text-base text-black font-light">MyMcDonald's Rewards</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">McCafé®</li>
        </ul>
      </div>

      <!-- Community Section -->
      <div class="flex flex-col w-screen h-auto">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Community</div>
          <button @click="OpenAndClose = !OpenAndClose" type="button">
            <Close fillColor="#00000" :size="30" />
          </button>
        </div>

        <ul v-if="OpenAndClose" class="p-1 grid grid-rows-10">
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Recalls & Alerts</li>
          <li class="text-base text-black font-light">Real Estate</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News & Notifications</li>
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">Something</li>
        </ul>
      </div>

      <!-- Contact Us Section -->
      <div class="flex flex-col w-screen h-auto">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Contact us</div>
          <button @click="OpenAndClose = !OpenAndClose" type="button">
            <Close fillColor="#00000" :size="30" />
          </button>
        </div>

        <ul v-if="OpenAndClose" class="p-1 grid grid-rows-10">
          <li class="text-base text-black font-light">Something</li>
          <li class="text-base text-black font-light">About Us Overview</li>
          <li class="text-base text-black font-light">Leadership Team</li>
          <li class="text-base text-black font-light">Values In Action</li>
          <li class="text-base text-black font-light">Franchising info</li>
          <li class="text-base text-black font-light">Accessibility</li>
          <li class="text-base text-black font-light">Investor Relations</li>
          <li class="text-base text-black font-light">News</li>
        </ul>
      </div>
    </div>

    <!-- Social Media & App Download Icons -->
    <div class="p-8"></div>
    <div class="w-screen h-auto grid grid-rows-2 gap-4 py-8">
      <div class="flex items-center gap-4 justify-center">
        <img src="/img/facebook.png" alt="Facebook" />
        <img src="/img/x.png" alt="X" />
        <img src="/img/youtube.png" alt="YouTube" />
        <img src="/img/instagram.png" alt="Instagram" />
        <img src="/img/tumblr.png" alt="Tumblr" />
        <img src="/img/spotify.png" alt="Spotify" />
      </div>
      <div class="flex items-center gap-8 justify-around">
        <img src="/img/app_store_badge.png" alt="App Store" />
        <img src="/img/DownloadApp_Googleplay_154x40.png" alt="Google Play" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Close from 'vue-material-design-icons/Close.vue'

let OpenAndClose = ref(false)
</script>

<style scoped></style>
