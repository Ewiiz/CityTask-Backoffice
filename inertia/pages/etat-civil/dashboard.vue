<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { tabsCivilStatus } from '~/pages/components/data/navigation_tabs'
import Layout from '~/pages/components/layout.vue'
</script>

<template>
  <Head title="Tableau de Bord" />
  <Layout :tabs="tabsCivilStatus"> Bruno </Layout>
</template>
