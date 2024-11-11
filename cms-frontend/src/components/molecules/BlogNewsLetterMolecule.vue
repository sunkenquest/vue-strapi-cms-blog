<template>
    <div class="my-5 max-w-7xl px-6 lg:px-8">
        <h1 class="mx-10 my-2">Subscribe to get future posts via email</h1>
        <form class="mx-auto flex max-w-md gap-x-4" @submit.prevent="handleSubmit">
            <BlogInputFieldAtom id="email-address" name="email" type="email" placeholder="Type your email..."
                v-model="email" background="bg-white/5" ring="white/10" textColor="text-white" />
            <BlogButtonAtom type="submit" color="white" hoverColor="gray-100">
                Subscribe
            </BlogButtonAtom>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BlogButtonAtom from '@/components/atoms/BlogButtonAtom.vue';
import BlogInputFieldAtom from '@/components/atoms/BlogInputFieldAtom.vue';
export default defineComponent({
    components: {
        BlogButtonAtom,
        BlogInputFieldAtom,
    },
    setup() {
        const email = ref<string>('');

        const handleSubmit = (event: Event) => {
            event.preventDefault();
            console.log('Form submitted with email:', email.value);
        };

        return {
            email,
            handleSubmit,
        };
    },
});
</script>
