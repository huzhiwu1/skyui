<template>
    <div class="g-popover" @click="handleClick" ref="popoverWrapper">
        <div class="contentWrapper" ref="contentWrapper" v-if="showContent">
            <slot name="content"></slot>
        </div>
        <span class="triggerWrapper" ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data(){
            return {
                showContent:false
            }
        },
        mounted() {
        },
        methods:{
            listenDocument(e){
                // 如果点击的事件源是popover则不响应
                if(!(this.$refs.popoverWrapper&&
                    (this.$refs.popoverWrapper===e.target
                        ||this.$refs.popoverWrapper.contains(e.target)
                        ||this.$refs.contentWrapper.contains(e.target))
                )){
                    this.showContent=false;
                    document.removeEventListener('click',this.listenDocument)
                }
            },
            positionContent(){
                let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.top=top+window.scrollX+height+'px'
                this.$refs.contentWrapper.style.left=left+window.scrollY+'px'
                document.body.appendChild(this.$refs.contentWrapper)
            },
            handleClick(e){
                //如果点击的是button，切换显示content
                if(this.$refs.triggerWrapper.contains(e.target)){
                    this.showContent=!this.showContent
                    // 如果是显示，给document添加事件，点击则关闭content
                    if(this.showContent){
                        this.$nextTick(()=>{
                            this.positionContent()
                            document.addEventListener('click',this.listenDocument)
                        })
                    }else{
                        //消除document的事件
                        document.removeEventListener('click',this.listenDocument)
                    }
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .g-popover{
        display: inline-block;
        //span默认是display:inline,margin上下对其没有撑开的作用
        .triggerWrapper{
            display: inline-block;
        }
    }
    .contentWrapper{
        cursor:pointer;
        position: absolute;
        border:1px solid #000;
    }
</style>
