<template>
    <h2 class="text-2xl font-bold text-gray-800" :class="props.customClass">
        <slot />
    </h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    customClass: {
        type: String,
        default: '',
    },
})
</script>
