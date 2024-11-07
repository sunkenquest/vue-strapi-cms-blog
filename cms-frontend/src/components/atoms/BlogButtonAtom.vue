<template>
    <button :type="type" :class="[
        'flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        colorClass,
        hoverClass
    ]" @click="onClick">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BaseButton',
    props: {
        type: {
            type: String as PropType<'button' | 'submit' | 'reset'>,
            default: 'button',
        },
        color: {
            type: String as PropType<'white' | 'blue' | 'green' | 'red'>,
            default: 'white',
        },
        hoverColor: {
            type: String as PropType<'gray-100' | 'gray-200' | 'gray-300'>,
            default: 'gray-100',
        },
    },
    computed: {
        colorClass(): string {
            return `bg-${this.color} text-${this.color === 'white' ? 'gray-900' : 'white'}`;
        },
        hoverClass(): string {
            return `hover:bg-${this.hoverColor}`;
        },
    },
    emits: ['click'],
    methods: {
        onClick(event: MouseEvent) {
            this.$emit('click', event);
        },
    },
});
</script>