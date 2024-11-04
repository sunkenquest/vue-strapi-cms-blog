<script setup lang="ts">
import { ref } from 'vue'
import BlogContainerMolecule from '@/components/molecules/BlogContainerMolecule.vue'

const posts = ref([
    { id: 1, title: 'First Blog Post', excerpt: 'This is the excerpt for the first blog post.', date: '2023-10-21' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is the excerpt for the second blog post.', date: '2023-10-22' },
    { id: 3, title: 'Third Blog Post', excerpt: 'This is the excerpt for the third blog post.', date: '2023-10-23' },
])
</script>

<template>
    <div class="blog-page">
        <div class="blog-posts">
            <BlogContainerMolecule v-for="post in posts" :key="post.id" :title="post.title" :date="post.date"
                :content="post.excerpt" />
        </div>
    </div>
</template>

<style scoped>
.blog-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.blog-posts {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>
