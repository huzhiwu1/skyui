<template>
    <div class="g-toast" :class="addToastClass">
        <slot></slot>
        <div class="col"></div>
        <div v-if="closeButton" class="closeButton" @click="handleClose">{{closeButton.text}}</div>
    </div>
</template>

<script>
    export default {
        name: "g-toast",
        props:{
            toastPosition:{
              type:String,
              default:"top",
              validator(value){
                  return ['top','bottom','middle'].indexOf(value)>-1
              }
            },
            waitTime:{
                type:[Number,String],
                default:'2000'
            },
            autoClose:{
                type:Boolean,
                default:true
            },
            closeButton:{
                type:Object,
                default:()=>({
                    text:'关闭',
                    callback:undefined
                })
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            handleClose(){
                const {closeButton:{callback}} = this
                this.close()
                if(callback&&typeof callback === 'function'){
                    callback(this)
                }
            }
        },
        computed:{
            addToastClass(){
                return [this.toastPosition]
            }
        },
        mounted(){
            const {autoClose,waitTime,closeButton} = this;
            if(autoClose&&!closeButton.callback){
                setTimeout(()=>{
                    this.close()
                },+waitTime)
            }
        }
    }
</script>

<style scoped lang="scss">
    $bg:#eaffff;
    $border-color:#b4f2ff;
    .g-toast{
        position: fixed;
        border-radius:0.4em;
        display: flex;
        justify-content: center;
        color:#333;
        background-color:$bg ;
        align-items: center;
        padding:10px;
        box-shadow:0px 3px 3px #f0f0f0;
        .col{
            margin-top:-10px;
            margin-bottom:-10px;
            margin-left:5px;
            margin-right: 5px;
            align-self: stretch;
            /*height:100%;*/
            width:1px;
            background-color: $border-color;
        }
        &.top{
            top:0;
            left:50%;
            transform: translateX(-50%);
        }
        &.bottom{
            bottom:0;
            left:50%;
            transform: translateX(-50%);
        }
        &.middle{
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
