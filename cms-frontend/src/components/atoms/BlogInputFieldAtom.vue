<template>
    <input :id="id" :name="name" :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput" :class="[
        'min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
        backgroundClass,
        ringClass,
        textColorClass
    ]" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BlogInputFieldAtom',
    props: {
        id: String,
        name: String,
        type: {
            type: String as PropType<'text' | 'email' | 'password' | 'number'>,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
        background: {
            type: String,
            default: 'bg-white/5',
        },
        ring: {
            type: String,
            default: 'ring-white/10',
        },
        textColor: {
            type: String,
            default: 'text-white',
        },
    },
    emits: ['update:modelValue'],
    computed: {
        backgroundClass(): string {
            return this.background;
        },
        ringClass(): string {
            return `ring-${this.ring}`;
        },
        textColorClass(): string {
            return this.textColor;
        },
    },
    methods: {
        onInput(event: Event) {
            const target = event.target as HTMLInputElement;
            this.$emit('update:modelValue', target.value);
        },
    },
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
