<template>
  <!-- Desktop view -->
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

  <!-- Mobile view -->
  <div class="w-screen h-full md:hidden">
    <div class="flex flex-col p-4">
      <!-- About Us Section -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">About Us</div>
          <button @click="toggleSection('aboutUs')" type="button">
            <Close fillColor="#000000" :size="30" />
          </button>
        </div>
        <ul v-if="isOpen('aboutUs')" class="p-1">
          <li
            v-for="(item, index) in aboutUsItems"
            :key="index"
            class="text-base text-black font-light py-2"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Services Section -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Services</div>
          <button @click="toggleSection('services')" type="button">
            <Close fillColor="#000000" :size="30" />
          </button>
        </div>
        <ul v-if="isOpen('services')" class="p-1">
          <li
            v-for="(item, index) in servicesItems"
            :key="index"
            class="text-base text-black font-light py-2"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Community Section -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Community</div>
          <button @click="toggleSection('community')" type="button">
            <Close fillColor="#000000" :size="30" />
          </button>
        </div>
        <ul v-if="isOpen('community')" class="p-1">
          <li
            v-for="(item, index) in communityItems"
            :key="index"
            class="text-base text-black font-light py-2"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Contact Us Section -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <div class="font-bold text-black text-base py-4">Contact Us</div>
          <button @click="toggleSection('contact')" type="button">
            <Close fillColor="#000000" :size="30" />
          </button>
        </div>
        <ul v-if="isOpen('contact')" class="p-1">
          <li
            v-for="(item, index) in contactItems"
            :key="index"
            class="text-base text-black font-light py-2"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Close from 'vue-material-design-icons/Close.vue'

// Initialize state for which section is open
const openSection = ref('')

// List of items for each section
const aboutUsItems = [
  'About Us Overview',
  'Leadership Team',
  'Values In Action',
  'Franchising Info',
  'Recalls & Alerts',
  'Real Estate',
  'Accessibility',
  'Investor Relations',
  'News & Notifications'
]

const servicesItems = [
  'Services Overview',
  'Wi-Fi',
  'PlayPlaces & Parties',
  'Mobile Order & Pay',
  'Trending Now',
  'McDonald’s Merchandise',
  'Family Fun Hub',
  "MyMcDonald's Rewards",
  'McCafé®'
]

const communityItems = [
  'Community Involvement',
  'Charity Programs',
  'Sustainability',
  'Volunteering',
  'Partnerships'
]

const contactItems = [
  'Customer Service',
  'Franchise Opportunities',
  'Investor Relations',
  'Media Inquiries'
]

// Function to toggle section visibility
const toggleSection = (sectionId) => {
  openSection.value = openSection.value === sectionId ? '' : sectionId
}

// Function to check if a section is open
const isOpen = (sectionId) => openSection.value === sectionId
</script>

<style scoped></style>
