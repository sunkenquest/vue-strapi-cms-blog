<template>
    <p class="text-[1.4rem] leading-[1.3] text-gray-700" :class="props.customClass">
        <slot />
    </p>
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