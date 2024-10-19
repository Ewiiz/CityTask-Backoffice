<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePage, Link } from '@inertiajs/vue3'

const props = defineProps<{
  tabs: Array<{ name: string; link: string }>
}>()

const activeTab = ref('')

onMounted(() => {
  const currentUrl = usePage().url
  const activeLink = props.tabs.find((tab) => tab.link === currentUrl)
  activeTab.value = activeLink ? activeLink.link : ''
})

const setActiveTab = (tab: { name: string; link: string }) => {
  activeTab.value = tab.link
}
</script>

<template>
  <div>
    <ul class="flex space-x-4 mt-5">
      <li v-for="tab in tabs" :key="tab.name">
        <Link
          :href="tab.link"
          @click.prevent="setActiveTab(tab)"
          :class="[
            activeTab === tab.link ? 'bg-white' : 'bg-slate-300',
            'px-2 py-4 rounded-t-lg min-w-32 text-center',
          ]"
        >
          {{ tab.name }}
        </Link>
      </li>
    </ul>
  </div>
</template>
