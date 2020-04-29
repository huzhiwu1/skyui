<template>
    <div class="g-toast">
        <slot></slot>
        <div class="col"></div>
        <div v-if="closeButton" class="closeButton" @click="handleClose">{{closeButton.text}}</div>
    </div>
</template>

<script>
    export default {
        name: "g-toast",
        props:{
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
        mounted(){
            const {autoClose,waitTime} = this;
            if(autoClose){
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
        top:0;
        left:50%;
        transform: translateX(-50%);
        border-radius:0.4em;
        display: flex;
        justify-content: center;
        color:#333;
        background-color:$bg ;
        align-items: center;
        padding:10px;
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
    }
</style>
