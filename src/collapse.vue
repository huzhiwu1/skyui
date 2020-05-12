<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "collapse",
        data(){
            return {
                // collapse内部决定展开的collpase-item
                activeNames:[].concat(this.value)
            }
        },
        model:{
            prop:'value',
            event:'change'
        },
        provide(){
          return {
              collapse:this
          }
        },
        props:{
            //用户决定展开的item
            value:{
                type:[Array,Number,String],
                default(){
                    return []
                }
            },
            accordion:{
                type:Boolean,
                default:false
            },
        },
        methods:{
            handleItemClick(name){
                if(this.accordion){
                    this.activeNames=[name]
                }else{
                    let index=this.activeNames.indexOf(name)
                    if(index>=0){
                        this.activeNames.splice(index,1)
                    }else{
                        this.activeNames.push(name)
                    }
                }
                this.$emit('change',this.activeNames)
            }
        }
    }
</script>

<style scoped lang='scss'>
    $border-color:#b4f2ff;
    $border-radius:4px;
    .g-collapse{
        /*border:1px solid black;*/
        /*<!--border-radius:$border-radius-->*/
    }
</style>
