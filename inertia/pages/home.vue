<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'
import { Button } from '~/components/ui/button'
</script>

<template>
  <Head title="Homepage" />

  <div>
    <Button>Mon Bouton</Button>
    <Link href="/etat-civil">Test</Link>
  </div>
</template>
