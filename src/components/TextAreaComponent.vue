<template>
  <div>
    <textarea
      cols="30"
      rows="10"
      class="border-2 border-red-400"
      v-model="content"
      @input="saveContent"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db, auth } from '../firebase' // Import your Firebase instance

const content = ref('')
const user = auth.currentUser

const saveContent = async () => {
  if (user) {
    const contentRef = doc(db, 'textareaContents', user.uid)
    await setDoc(contentRef, {
      text: content.value
    })
  }
}

const loadContent = async () => {
  if (user) {
    const contentRef = doc(db, 'textareaContents', user.uid)
    const contentDoc = await getDoc(contentRef)

    if (contentDoc.exists()) {
      content.value = contentDoc.data().text
    }
  }
}

onMounted(() => {
  loadContent()
})
</script>

<style scoped>
/* Add your styles here */
</style>
