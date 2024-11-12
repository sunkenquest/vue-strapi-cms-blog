<template>
    <figure @click="openModal"
        class="bg-slate-100 p-8 w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] h-[auto] m-4 shadow-[0_4px_6px_rgba(255,255,255,0.4)] cursor-pointer">
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
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-100 z-50">
        <div class="bg-white p-8 w-full sm:w-[30rem] md:w-[50rem] lg:w-[60rem] shadow-xl relative">
            <button @click="closeModal" class="absolute top-4 right-4 text-lg text-gray-700">×</button>
            <BlogTitleAtom>{{ props.title }}</BlogTitleAtom>
            <BlogDateAtom :date="props.date" />
            <div class="pt-6">
                <BlogContentAtom>{{ props.content }}</BlogContentAtom>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted, onUnmounted } from 'vue';
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
});

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
    disableScroll();
};

const closeModal = () => {
    showModal.value = false;
    enableScroll();
};

const truncatedContent = computed(() =>
    props.content.length > 200 ? props.content.substring(0, 200) + '...' : props.content
);

const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
    document.body.style.overflow = '';
};

const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeModal();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscapeKey);
});
</script>
