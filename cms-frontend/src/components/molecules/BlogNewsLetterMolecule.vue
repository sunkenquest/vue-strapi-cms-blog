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
        <p v-if="successMessage" class="text-green-500 mt-3">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BlogButtonAtom from '@/components/atoms/BlogButtonAtom.vue';
import BlogInputFieldAtom from '@/components/atoms/BlogInputFieldAtom.vue';
import type { BlogEmail } from '@/interface/email';
import { getAllEmails, postEmail } from '@/services/emailHook';

export default defineComponent({
    components: {
        BlogButtonAtom,
        BlogInputFieldAtom,
    },
    setup() {
        const email = ref<string>('');
        const successMessage = ref<string | null>(null);
        const errorMessage = ref<string | null>(null);

        const handleSubmit = async () => {
            if (!email.value.trim()) {
                errorMessage.value = "Please enter an email address.";
                setTimeout(() => {
                    errorMessage.value = null;
                }, 3000);
                return;
            }
            const emailData: BlogEmail = { email: email.value };

            try {
                const emails = await getAllEmails();
                if (emails?.some(e => e.email === emailData.email)) {
                    errorMessage.value = "Email already subscribed!";
                    setTimeout(() => {
                        errorMessage.value = null;
                    }, 3000);
                    return;
                }

                const response = await postEmail(emailData);
                if (response) {
                    successMessage.value = "Successfully subscribed!";
                    errorMessage.value = null;
                    email.value = '';
                    setTimeout(() => {
                        successMessage.value = null;
                    }, 3000);
                } else {
                    throw new Error("Subscription failed.");
                }
            } catch (error) {
                errorMessage.value = "An error occurred while subscribing. Please try again.";
                successMessage.value = null;
                console.error("Error posting email:", error);
            }
        };

        return {
            email,
            handleSubmit,
            successMessage,
            errorMessage,
        };
    },
});
</script>
