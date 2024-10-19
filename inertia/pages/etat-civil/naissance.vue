<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import { Button } from '~/components/ui/button'
import Tabs from '~/pages/components/tabs.vue'

const tabs = [
  { name: 'Dashboard', link: '/etat-civil/dashboard' },
  { name: 'Naissance', link: '/etat-civil/naissance' },
  { name: 'Mariage', link: '/etat-civil/mariage' },
  { name: 'Vie', link: '/etat-civil/vie' },
  { name: 'Décès', link: '/etat-civil/deces' },
]
</script>

<template>
  <Head title="Naissance" />

  <div>
    <Tabs :tabs="tabs" />
  </div>
</template>
