<script setup>
import CustomCarousel from '@/components/CustomCarousel.vue'
</script>

<template>
  <main>
    <div class="min-w-[800px]">
      <CustomCarousel
        category="New releases for you"
        :data="[
          {
            url: 'https://picsum.photos/id/89/300/300',
            song: 'Foregone',
            by: 'In Flames',
            releasedOn: '10/02/2023'
          },
          {
            url: 'https://picsum.photos/id/101/300/300',
            song: 'Dark Waters',
            by: 'Delain',
            releasedOn: '09/01/2023'
          },
          {
            url: 'https://picsum.photos/id/121/300/300',
            song: 'Heritage',
            by: 'Distant',
            releasedOn: '10/01/2023'
          },
          {
            url: 'https://picsum.photos/id/134/300/300',
            song: 'Meanwhile',
            by: 'Klone',
            releasedOn: '08/02/2023'
          },
          {
            url: 'https://picsum.photos/id/144/300/300',
            song: 'Truth Decay',
            by: 'You Me At Six',
            releasedOn: '10/01/2023'
          },
          {
            url: 'https://picsum.photos/id/155/300/300',
            song: 'This Is Why',
            by: 'Paramore',
            releasedOn: '10/02/2023'
          },
          {
            url: 'https://picsum.photos/id/166/300/300',
            song: 'The Jaws Of Life',
            by: 'Pierce The Veil',
            releasedOn: '09/23/2023'
          },
          {
            url: 'https://picsum.photos/id/198/300/300',
            song: 'The Future Is Your Past',
            by: 'In The Brian Jonestown Massacre',
            releasedOn: '07/25/2023'
          },
          {
            url: 'https://picsum.photos/id/211/300/300',
            song: 'The Land, The Water, The Sky',
            by: 'Black Belt Eagle Scout',
            releasedOn: '09/22/2023'
          },
          {
            url: 'https://picsum.photos/id/223/300/300',
            song: 'The Day My Father Died',
            by: 'SYML',
            releasedOn: '10/02/2023'
          },
          {
            url: 'https://picsum.photos/id/225/300/300',
            song: 'Complete Mountain Almanac',
            by: 'Complete Mountain Almanac',
            releasedOn: '10/02/2023'
          },
          {
            url: 'https://picsum.photos/id/239/300/300',
            song: 'Music From Montana Story',
            by: 'Kevin Morby',
            releasedOn: '10/01/2023'
          }
        ]"
      />
    </div>
  </main>
</template>
