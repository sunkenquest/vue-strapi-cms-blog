<template>
    <BlogHeaderMolecule :imageUrl="profile.imageUrl" :alt="profile.alt" :title="profile.title" :bio="profile.bio" />
    <BlogNewsLetterMolecule />
    <BlogContainerMolecule v-for="post in posts" :key="post.id" :title="post.title" :date="post.date"
        :content="post.excerpt" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BlogContainerMolecule from '@/components/molecules/BlogContainerMolecule.vue'
import BlogHeaderMolecule from '@/components/molecules/BlogHeaderMolecule.vue'
import BlogNewsLetterMolecule from '@/components/molecules/BlogNewsLetterMolecule.vue'
import { fetchBlogPosts } from '@/services/blogHook';
import type { BlogPost } from '@/interface/blog';

const posts = ref<BlogPost[]>([]);

const profile = ref({
    imageUrl: new URL('@/assets/images/hero.png', import.meta.url).href,
    alt: "A descriptive hero image",
    title: "MIKCO JASARENO",
    bio: "Sit qui sit ut fugiat. Consectetur minim esse exercitation dolore ullamco esse laborum do tempor ea cillum. Qui laborum reprehenderit eu et dolore dolore mollit exercitation aute fugiat."
});

onMounted(async () => {
    posts.value = await fetchBlogPosts();
});
</script>
