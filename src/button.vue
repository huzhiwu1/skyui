<template>
    <button class="g-button">
        <g-icon :name="icon"></g-icon>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props:['icon']
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        padding: 0.5em 1em;
        border-radius: 0.4em;
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        &:hover {
            border-color: var(--border-hover-color)
        }

        &:active {
            background-color: var(--button-active-bg)
        }

        &:focus {
            outline: none;
        }
    }

</style>
