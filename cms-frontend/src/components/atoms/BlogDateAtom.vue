<template>
    <span class="text-gray-600 text-sm">{{ formattedDate }}</span>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
    date: string | number | Date
}>()

const formattedDate = computed(() => {
    const dateObject = new Date(props.date)
    return dateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
})
</script>
