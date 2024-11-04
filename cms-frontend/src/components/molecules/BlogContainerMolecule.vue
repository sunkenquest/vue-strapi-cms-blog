<template>
    <div class="text-block-container" :class="customClass">
        <BlogDateAtom :date="props.date" />
        <BlogTitleAtom>{{ props.title }}</BlogTitleAtom>
        <BlogContentAtom>{{ props.content }}</BlogContentAtom>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import BlogTitleAtom from '../atoms/BlogTitleAtom.vue';
import BlogDateAtom from '../atoms/BlogDateAtom.vue';
import BlogContentAtom from '../atoms/BlogContentAtom.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    customClass: {
        type: String,
        default: '',
    },
})
</script>

<style scoped>
.text-block-container {
    padding: 4.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #000000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 1rem auto;
}

.date-atom {
    margin-bottom: 1rem;
    font-size: 0.85rem;
    color: #000000;
}
</style>
