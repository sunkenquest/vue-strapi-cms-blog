<script setup lang="ts">
import { ref } from 'vue'
import BlogContainerMolecule from '@/components/molecules/BlogContainerMolecule.vue'

const posts = ref([
    { id: 1, title: 'First Blog Post', excerpt: 'Aute commodo duis elit pariatur laborum laboris eu fugiat. Aute ad aute mollit voluptate consectetur cupidatat in reprehenderit quis consequat eu dolor amet sit. Eiusmod velit dolore Lorem et commodo ipsum aute tempor officia.', date: '2023-10-21' },
    { id: 2, title: 'Second Blog Post', excerpt: 'Eiusmod consectetur quis est consequat laborum quis eiusmod culpa. Adipisicing cillum labore consequat enim veniam occaecat ad occaecat deserunt. Ex reprehenderit aute labore laborum mollit deserunt ipsum mollit.', date: '2023-10-22' },
    { id: 3, title: 'Third Blog Post', excerpt: 'Dolor ea veniam consectetur est cillum commodo esse occaecat velit pariatur quis velit. Reprehenderit sit irure culpa in officia aute tempor ex excepteur nostrud nisi consectetur cupidatat nostrud. Sint aliqua ullamco Lorem reprehenderit reprehenderit deserunt occaecat deserunt ullamco commodo qui et nisi labore..', date: '2023-10-23' },
])
</script>

<template>
    <BlogContainerMolecule v-for="post in posts" :key="post.id" :title="post.title" :date="post.date"
        :content="post.excerpt" />
</template>