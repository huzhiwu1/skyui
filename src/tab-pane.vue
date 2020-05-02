<template>
    <div class="g-tab-pane" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-tab-pane",
        componentName:'g-tab-pane',
        props:{
            label:String,
        },
        data(){
            return {
                index:-1
            }
        },
        computed:{
            active(){
                let {mySelected,selected} = this.$parent;
                let realySelected = mySelected||selected
                return realySelected===this.index
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>
