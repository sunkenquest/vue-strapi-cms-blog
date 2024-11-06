<template>
    <p class="text-[1.2rem] leading-[1.1] text-center">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BioAtom',
    props: {
        text: {
            type: String as PropType<string>,
            required: true,
        },
    },
});
</script>