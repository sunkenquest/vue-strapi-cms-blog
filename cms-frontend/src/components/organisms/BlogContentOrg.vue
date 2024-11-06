<template>
    <BlogHeaderMolecule :imageUrl="profile.imageUrl" :alt="profile.alt" :title="profile.title" :text="profile.text" />
    <BlogContainerMolecule v-for="post in posts" :key="post.id" :title="post.title" :date="post.date"
        :content="post.excerpt" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlogContainerMolecule from '@/components/molecules/BlogContainerMolecule.vue'
import BlogHeaderMolecule from '@/components/molecules/BlogHeaderMolecule.vue'

const posts = ref([
    { id: 1, title: 'First Blog Post', excerpt: 'Aute commodo duis elit pariatur laborum laboris eu fugiat. Aute ad aute mollit voluptate consectetur cupidatat in reprehenderit quis consequat eu dolor amet sit. Eiusmod velit dolore Lorem et commodo ipsum aute tempor officia.', date: '2023-10-21' },
    { id: 2, title: 'Second Blog Post', excerpt: 'Eiusmod consectetur quis est consequat laborum quis eiusmod culpa. Adipisicing cillum labore consequat enim veniam occaecat ad occaecat deserunt. Ex reprehenderit aute labore laborum mollit deserunt ipsum mollit.', date: '2023-10-22' },
    { id: 3, title: 'Third Blog Post', excerpt: 'Dolor ea veniam consectetur est cillum commodo esse occaecat velit pariatur quis velit. Reprehenderit sit irure culpa in officia aute tempor ex excepteur nostrud nisi consectetur cupidatat nostrud. Sint aliqua ullamco Lorem reprehenderit reprehenderit deserunt occaecat deserunt ullamco commodo qui et nisi labore..', date: '2023-10-23' },
])

const profile = ref({
    imageUrl: new URL('@/assets/images/hero.png', import.meta.url).href,
    alt: "A descriptive hero image",
    title: "MIKCO JASARENO",
    text: "Sit qui sit ut fugiat. Consectetur minim esse exercitation dolore ullamco esse laborum do tempor ea cillum. Qui laborum reprehenderit eu et dolore dolore mollit exercitation aute fugiat."
});

</script>
