<template>
    <p class="content" :class="props.customClass">
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

<style scoped>
.content {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
}
</style>
