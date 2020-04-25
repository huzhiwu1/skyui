<template>
    <button :class="{[`icon-${iconPosition}`]:true}" class="g-button"
        @click="$emit('click')"
    >
        <g-icon :name="icon" class="icon" v-if='icon&&!isLoading'></g-icon>
        <g-icon name="loading" v-if="isLoading" class="icon loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return ['left', 'right'].includes(value)
                }
            },
            isLoading:{
                type:Boolean,
                default:false,
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotateZ(0deg)
        }
        100% {
            transform: rotateZ(360deg)
        }
    }
    .loading{
        animation:spin 1s infinite linear
    }
    .g-button {
        font-size: var(--font-size);
        padding: 0.5em 1em;
        border-radius: 0.4em;
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-hover-color)
        }

        &:active {
            background-color: var(--button-active-bg)
        }

        &:focus {
            outline: none;
        }

        .icon {
            margin: 0 0.3em
        }

        &.icon-left {
            .icon {
                margin-left: 0;
                order: 1
            }

            .content {
                order: 2
            }
        }

        &.icon-right {
            .icon {
                margin-right: 0;
                order: 2
            }

            .content {
                order: 1
            }

        }

    }

</style>
