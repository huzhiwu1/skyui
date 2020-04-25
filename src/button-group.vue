<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group"
    }
</script>

<style scoped lang="scss">
    .g-button-group{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .g-button{
            border-radius:0;
            &:first-child{
                border-top-left-radius:var(--border-radius);
                border-bottom-left-radius:var(--border-radius)
            }
            &:last-child{
                border-top-right-radius:var(--border-radius);
                border-bottom-right-radius:var(--border-radius);
            }
            &:not(first-child){
                margin-left:-1px;
            }
            &:hover{
                position:relative;
                z-index:1;
            }
        }
    }
</style>
∂
