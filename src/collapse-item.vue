<template>
    <div class="g-collapse-item">
        <div class="g-collapse-item-header" @click="handleClick">
            <slot name="title">{{title}}</slot>
        </div>
        <div class="g-collapse-item-content" v-show="isActive">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        props:{
            title:String,
            name:{
                type:[String,Number],
                default(){
                    return this._uid;
                }
            }
        },
        data(){
            return {

            }
        },
        inject:['collapse'],
        computed:{
            isActive(){
                return this.collapse.activeNames.indexOf(this.name)>=0
            }
        },
        methods:{
            handleClick(){
                this.collapse.handleItemClick(this.name)
            }
        }
    }
</script>

<style scoped lang='scss'>
    $border-color:#b4f2ff;
    $font-size:14px;
    $border-radius:4px;
    .g-collapse-item{
        border: 1px solid red;
        font-size:$font-size;
        margin-top:-1px;
        padding:10px;
        &:first-child{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
        &:last-child{
            border-bottom-left-radius:$border-radius;
            border-bottom-right-radius:$border-radius;
            margin-bottom:-1px;
        }
        .g-collapse-item-header{
            font-size:1.2em;
            cursor: pointer;
        }
    }
</style>
