<template>
  <main class="relative w-screen h-full overflow-hidden">
    <div class="relative">
      <img
        class="h-screen w-screen flex md:hidden"
        src="/img/fast food image 481cf65f-8a3d-4cd5-a80b-ed6779124db0.png"
        alt=""
      />

      <img
        class="h-screen w-screen md:flex hidden"
        src="/img/fast food image 4bff65dd-7daf-4074-94d7-e87e35b37bad.png"
        alt=""
      />

      <div
        class="absolute top-1/2 px-[5%] transform -translate-y-1/2 insert-0 flex flex-col justify-center items-center gap-8"
      >
        <div class="text-5xl md:text-7xl font-bold text-black md:text-gray-300 flex gap-3">
          <span class="text-white md:text-white">Order</span>
          <span class="text-black md:text-black">delivery </span>
        </div>

        <div
          class="flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%]"
        >
          <div class="flex w-full gap-2">
            <input
              class="flex-grow border border-black shadow-2xl px-2 py-2 text-lg rounded-lg placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-xl md:px-4 md:py-4 lg:text-2xl lg:px-6 lg:py-4 xl:py-4 xl:px-8"
              placeholder="Search delivery address..."
              type="text"
            />

            <button
              type="button"
              class="bg-black text-white rounded-md text-lg px-4 py-4 md:text-xl md:px-8 md:py-4 lg:text-2xl lg:px-6 lg:py-4"
            >
              Find
            </button>
          </div>
          <div class="text-sm font-light text-white pr-60">use QR code</div>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <div class="w-screen mb-0">
      <CustomCarousel
        category="New releases for you"
        title="New releases"
        :data="[
          {
            url: '/img/file (9).png',
            song: 'Classic Burger',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (8).png',
            song: 'Smoky BBQ Stack',
            by: 'Delain',
            releasedOn: 'New'
          },
          {
            url: '/img/file (10).png',
            song: 'Cheddar Crunch Delight',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (9).png',
            song: 'Spicy Jalapeño Blast',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (8).png',
            song: 'Double Decker Supreme',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (14).png',
            song: 'Classic Beef Tower',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (15).png',
            song: 'Cheezburger',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (12).png',
            song: 'Maple Bacon Bomber',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (10).png',
            song: 'Grilled Onion Melt',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (18).png',
            song: 'Zesty Ranch Smash',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (9).png',
            song: 'Triple Cheese Inferno',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file (8).png',
            song: 'CFirecracker Sizzle Burger',
            by: 'description',
            releasedOn: 'New'
          }
        ]"
      />
    </div>

    <div class="w-auto h-auto bg-white">
      <div class="p-8"></div>
      <div
        class="p-10 grid text-black grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 md:text-red-300 lg:text-red-300 sm::text-red-300 xl:text-red-300"
      >
        <DasComp
          image="/img/gimme a pic of  ffaeb647-6729-463c-8081-47641a77139b.png"
          title="The Meal Deal gets you how much?!"
          text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
          subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
          button="Get the Meal in the App"
          size="600px"
        />
        <div class="px-[3%] gap-4 grid text-black grid-cols-1 py-8">
          <DieComp
            image="/img/output (3).jpg"
            title="“McD’s Best Burgers Ever.” - Hamburglar"
            text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet."
            subtext="Get one today in the app for pickup or McDelivery®.^"
            button="Get the Meal in the App"
            size="600px"
          />
        </div>
        <DasComp
          image="/img/gimme a pic of  6bbb77d8-d93e-473f-b9a2-0e4692047f1e.png"
          title="The Meal Deal gets you how much?!"
          text="A 4 piece McNuggets®, small fries and soft drink, plus a McChicken® or McDouble® starts at $5. You already know the name, now get yours in the app before it’s gone.*"
          subtext="*Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company."
          button="Get the Meal in the App"
          size="600px"
        />
      </div>
      <div class="p-8"></div>
    </div>
    <!-- Carousel -->
    <div class="w-screen mb-20">
      <CustomCarousel
        title="Best for you"
        category="New releases for you"
        :data="[
          {
            url: '/img/file (16).png',
            song: 'Classic Burger',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__10744faa-2e52-4cd8-84ca-d5804f8c0444-removebg-preview.png',
            song: 'Smoky BBQ Stack',
            by: 'Delain',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__53420499-9fad-4891-9830-86f0d39d9116-removebg-preview.png',
            song: 'Cheddar Crunch Delight',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__37e3567e-315b-4617-ba10-295c0096a1ce-removebg-preview.png',
            song: 'Spicy Jalapeño Blast',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/file.png',
            song: 'Double Decker Supreme',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__58017fd2-8d24-4bbf-b65a-294f23aa42a8-removebg-preview.png',
            song: 'Classic Beef Tower',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__e61b2600-81b3-4790-8464-0bfbe91c2084-removebg-preview.png',
            song: 'Cheezburger',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__10744faa-2e52-4cd8-84ca-d5804f8c0444-removebg-preview.png',
            song: 'Maple Bacon Bomber',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__37e3567e-315b-4617-ba10-295c0096a1ce-removebg-preview.png',
            song: 'Grilled Onion Melt',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__58017fd2-8d24-4bbf-b65a-294f23aa42a8-removebg-preview.png',
            song: 'Zesty Ranch Smash',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__37e3567e-315b-4617-ba10-295c0096a1ce-removebg-preview.png',
            song: 'Triple Cheese Inferno',
            by: 'description',
            releasedOn: 'New'
          },
          {
            url: '/img/gimme_a_pic_of__58017fd2-8d24-4bbf-b65a-294f23aa42a8-removebg-preview.png',
            song: 'CFirecracker Sizzle Burger',
            by: 'description',
            releasedOn: 'New'
          }
        ]"
      />
    </div>
    <div class="w-screen h-auto bg-gray-100">
      <div class="px-[3%] gap-4 text-black py-8">
        <DerComp
          image="/img/35d3cdaac1a43701e208f936357b13a10086faa3-2000x1000.webp"
          title="“McD’s Best Burgers Ever.” - Hamburglar"
          text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger."
          subtext="Get one today in the app for pickup or McDelivery®.^"
          button="Get the Meal in the App"
          size="600px"
        />
      </div>
      <div class="px-[3%] gap-4 grid text-black grid-cols-1 py-8">
        <DerComp
          image="/img/f39ef68a4f1d6417cf34072991c4306225f66e9a-2000x1000.webp"
          title="“McD’s Best Burgers Ever.” - Hamburglar"
          text="You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger."
          subtext="Get one today in the app for pickup or McDelivery®.^"
          button="Get the Meal in the App"
          size="600px"
        />
      </div>
    </div>
    <div class="border-b border-b-gray-400"></div>
  </main>
</template>

<script setup>
import CustomCarousel from '@/components/CustomCarousel.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

import DerComp from '@/components/DerComp.vue'
import DieComp from '@/components/DieComp.vue'
import DasComp from '@/components/DasComp.vue'
</script>

<style lang="scss" scoped></style>
