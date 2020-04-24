<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {
    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        padding:0.5em 1em;
        border-radius:0.4em;
        border:1px solid var(--border-color);
        background-color: var(--button-bg);
        &:hover{
            border-color:var(--border-hover-color)
        }
        &:active{
            background-color:var(--button-active-bg)
        }
        &:focus{
            outline: none;
        }
    }

</style>
