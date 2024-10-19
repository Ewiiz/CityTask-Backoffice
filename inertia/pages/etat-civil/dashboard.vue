<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import { Button } from '~/components/ui/button'
import Tabs from '~/pages/components/tabs.vue'
import { tabsCivilStatus } from '~/pages/components/data/navigation_tabs'
</script>

<template>
  <Head title="Tableau de Bord" />

  <div class="bg-zinc-200">
    <Button>Mon Bouton</Button>
    <Link href="/">Test</Link>
    <div>
      <Tabs :tabs="tabsCivilStatus" />
    </div>
  </div>
</template>
