<template>
    <img :src="imageUrl" alt="Profile image" class="h-[50px]" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'HeroImage',
    props: {
        imageUrl: {
            type: String as PropType<string>,
            required: true,
        }
    },
});
</script>