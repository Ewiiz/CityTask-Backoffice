<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { tabsCivilStatus } from '~/pages/components/data/navigation_tabs'
import Layout from '~/pages/components/layout.vue'
</script>

<template>
  <Head title="Mariage" />
  <Layout :tabs="tabsCivilStatus">Mariage</Layout>
</template>
