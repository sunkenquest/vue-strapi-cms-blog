<template>
    <h2 class="title" :class="props.customClass">
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

<style scoped>
.title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
}
</style>
