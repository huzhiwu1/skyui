<template>
    <div :class="[span&&`col-${span}`,offset&&`offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
         class="col"
    >
            <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "g-col",
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            }
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        width: 100%;
        $class-prefix: 'col-';
        $oneWidth: 100%/24;
        $offset-prefix: 'offset-';
        $gutter-prefix: "gutter-";

        &:first-child {
            padding-left: 0!important;
        }

        &:last-child {
            padding-right: 0!important;
        }

        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i} {
                width: $i*$oneWidth;
                max-width: $i*$oneWidth;
                min-width: $i*$oneWidth;
            }
        }
        @for $i from 1 through 24 {
            &.#{$offset-prefix}#{$i} {
                margin-left: $oneWidth*$i
            }
        }
    }
</style>
