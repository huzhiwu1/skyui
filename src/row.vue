<template>
    <div class="row" :class="[align&&`align-${align}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"g-row",
        props:{
            gutter:{
                type:[String,Number]
            },
            align:{
                type:String,
                default:'left',
                validator(value){
                    return ['left','center','right'].includes(value)
                }
            }
        },
        mounted(){
            this.$children.forEach(item=>{
                item.gutter=this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content:center;
        }
        &.align-right{
            justify-content:flex-end
        }
    }
</style>
