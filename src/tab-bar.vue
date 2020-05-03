<template>
    <div class="g-tab-bar" :style="barStyle"></div>
</template>

<script>
    import tabs from "./tabs";

    export default {
        name: "g-tab-bar",
        props:{
            panes:Array,
        },
        computed:{
            barStyle(){
                let style={}
                this.panes.forEach((item,index)=>{
                    if(index===this.$parent.selected){
                       let {width} = window.getComputedStyle(this.$parent.$refs.tabs.querySelector('.g-tab-head.active'))
                        let {offsetLeft}=this.$parent.$refs.tabs.querySelector('.g-tab-head.active')

                        style={'width':width,'transform':`translate(${offsetLeft}px)`}
                    }
                })

                return style;
            }
        }
    }
</script>

<style scoped lang='scss'>
    $border-color:#b4f2ff;
    .g-tab-bar{
        position: absolute;
        bottom:0;
        left:0;
        height:3px;
        border-radius:1.5px;
        background-color:$border-color ;
        transition: transform .5s cubic-bezier(0.76, 0.61, 0.24, 1.43)
    }
</style>
