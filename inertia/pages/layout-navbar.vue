<script setup lang="ts">
import { Circle, Route } from 'lucide-vue-next'
import { ref, watch } from 'vue'

const props = defineProps<{
  url: string
}>()

let category = ref('')

function getCategory(url: string): string {
  if (url.startsWith('/etat-civil')) {
    return 'Etat Civil'
  } else if (url.startsWith('/impots')) {
    return 'Impôts'
  } else if (url.startsWith('/finance')) {
    return 'Finance'
  } else if (url.startsWith('/transport')) {
    return 'Transport'
  }
  return 'Catégorie inconnue' // Valeur par défaut
}

watch(
  () => props.url,
  (newUrl) => {
    category.value = getCategory(newUrl)
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <div class="flex items-center justify-between p-8 border border-b-2">
      <Route />
      <p class="font-bold text-4xl">{{ category }}</p>

      <div class="flex">
        <span class="mr-2">Amina.R</span>
        <Circle />
      </div>
    </div>

    <slot></slot>
  </div>
</template>
