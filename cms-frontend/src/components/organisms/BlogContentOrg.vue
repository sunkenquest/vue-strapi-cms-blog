<template>
    <BlogHeaderMolecule :imageUrl="DEFAULT_PROFILE_HERO" :title="profile?.title || DEFAULT_PROFILE_TITLE"
        :bio="profile?.bio || DEFAULT_PROFILE_BIO" />
    <BlogNewsLetterMolecule />
    <BlogContainerMolecule v-for="post in posts" :key="post.id" :title="post.title" :date="post.date"
        :content="post.excerpt" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BlogContainerMolecule from '@/components/molecules/BlogContainerMolecule.vue';
import BlogHeaderMolecule from '@/components/molecules/BlogHeaderMolecule.vue';
import BlogNewsLetterMolecule from '@/components/molecules/BlogNewsLetterMolecule.vue';
import { fetchBlogPosts } from '@/services/blogHook';
import type { BlogPost } from '@/interface/blog';
import type { BlogProfile } from '@/interface/profile';
import { fetchProfile } from '@/services/profileHook';
import { DEFAULT_PROFILE_TITLE, DEFAULT_PROFILE_BIO, DEFAULT_PROFILE_HERO } from '@/constants/constant';

const posts = ref<BlogPost[]>([]);
const profile = ref<BlogProfile | null>(null);

onMounted(async () => {
    posts.value = await fetchBlogPosts();
    profile.value = await fetchProfile();
});
</script>
