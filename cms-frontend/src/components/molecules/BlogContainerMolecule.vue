<template>
    <figure
        class="bg-slate-100 p-8 w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] h-[auto] m-4 shadow-[0_4px_6px_rgba(255,255,255,0.4)]">
        <figcaption class="text-center font-medium space-y-2">
            <span class="text-sky-500 dark:text-sky-400">
                <BlogDateAtom :date="props.date" />
            </span>
            <span class="block text-slate-700 dark:text-slate-500">
                <BlogTitleAtom>{{ props.title }}</BlogTitleAtom>
            </span>
        </figcaption>
        <blockquote class="pt-6">
            <BlogContentAtom>{{ truncatedContent }}</BlogContentAtom>
        </blockquote>
    </figure>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
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

const truncatedContent = computed(() =>
    props.content.length > 200 ? props.content.substring(0, 200) + '...' : props.content
);
</script>
