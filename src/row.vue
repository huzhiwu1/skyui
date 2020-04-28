<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"g-row",
        props:{
            gutter:{
                type:[String,Number]
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
    }
</style>
