<template>
    <div class="my-10 flex flex-col items-center space-y-1 sm:w-[30rem] md:w-[40rem] lg:w-[50rem]">
        <BlogHeaderHeroAtom :imageUrl="props.imageUrl" alt="hero image" />
        <BlogHeaderTitleAtom :title="props.title" />
        <div class="pt-5 pb-0">
            <BlogHeaderBioAtom :text="props.bio" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BlogHeaderBioAtom from '../atoms/BlogHeaderBioAtom.vue';
import BlogHeaderHeroAtom from '../atoms/BlogHeaderHeroAtom.vue';
import BlogHeaderTitleAtom from '../atoms/BlogHeaderTitleAtom.vue';

const props = defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
});
</script>
