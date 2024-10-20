<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePage, Link } from '@inertiajs/vue3'

const props = defineProps<{
  tabs: Array<{ name: string; category: string }>
}>()

const activeTab = ref('')

onMounted(() => {
  const currentUrl = usePage().url
  const activeLink = props.tabs.find(
    (tab) => tab.category + '/' + tab.name.toLowerCase() === currentUrl
  )
  activeTab.value = activeLink ? activeLink.category + '/' + activeLink.name.toLowerCase() : ''
})

const setActiveTab = (tab: { name: string; category: string }) => {
  activeTab.value = tab.category + '/' + tab.name.toLowerCase()
}
</script>

<template>
  <div class="bg-slate-100">
    <ul class="flex space-x-4 pt-5 mx-6">
      <li v-for="tab in tabs" :key="tab.name">
        <Link
          :href="`${tab.category}/${tab.name.toLowerCase()}`"
          @click.prevent="setActiveTab(tab)"
          :class="[
            activeTab === tab.category + '/' + tab.name.toLowerCase() ? 'bg-white' : 'bg-zinc-200',
            'px-2 py-1.5 rounded-t-lg min-w-32 text-center',
          ]"
        >
          {{ tab.name }}
        </Link>
      </li>
    </ul>

    <div class="content mt-6">
      <slot></slot>
    </div>
  </div>
</template>
