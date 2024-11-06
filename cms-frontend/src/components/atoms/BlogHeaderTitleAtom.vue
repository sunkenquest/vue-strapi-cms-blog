<template>
    <p class="text-sm font-medium tracking-widest">{{ title }}</p>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BlogHeaderTitleAtom',
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
    },
});
</script>