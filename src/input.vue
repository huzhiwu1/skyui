<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change',$event)"
            @focus="$emit('focus',$event)"
            @blur="$emit('blur',$event)"
            @input="$emit('input',$event)"
        >
        <template v-if="error">
            <g-icon name="error" class="fillRed"></g-icon>
            <span class="message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "g-input",
        components:{
            'g-icon':Icon
        },
        props:{
            value:{
                type:String,
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String,
            }

        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $border-radius:.3em;
    $border-color:#ccc;
    $border-focus-color:#aaa;
    $border-hover-color:#b4f2ff;
    $disabled-color:#aaa;
    $border-error-color:#FB6164;
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        :not(:last-child){
            margin-right:0.5em
        }
        input {

            font-size: inherit;
            padding: .5em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            &:focus{
                outline: none;
                box-shadow: inset 0px 1px 3px $border-focus-color;
            }
            &:hover{
                border-color: $border-hover-color
            }
            &[disabled],&[readonly]{
                color: $disabled-color;
                border-color:$disabled-color;
                cursor:not-allowed;
            }
        }
        &.error > input{
            border-color: $border-error-color;
        }
        .fillRed{
            color:$border-error-color
        }
    }
</style>
