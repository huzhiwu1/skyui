<template>
    <div class="g-popover" ref="popoverWrapper">
        <div :class="{[elementPosition]:true}" class="contentWrapper"
             ref="contentWrapper" v-show="showContent">
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
                showContent:false,
                popoverElem:null,
                elementPosition: 'bottom'
            }
        },
        watch: {
            visible: {
                immediate: true,
                handler(value) {
                    // this.showContent=value
                    if(!this.popoverElem){
                        this.$nextTick(()=>{
                            this.showContent = value
                        })
                    }else{

                        this.showContent = value
                    }

                    this.$emit('change', value)
                }
            },
            showContent:{
                // immediate: true,
                handler(value) {
                    // console.log(value,"value")
                    // console.log(this.$el)
                    value ? (this.createPopoper(), this.open()) : ''
                    // console.log(this)
                    this.$nextTick(()=>{
                        this.$emit('change', value)
                    })

                },
            },
            position: {
                immediate: true,
                handler(value) {
                    this.elementPosition = value
                }
            }
        },
        model:{
          prop:'visible',
          event:'change'
        },
        props:{
            visible:{
              type:Boolean,
              default:false
            },
            position:{
                type:String,
                default:'bottom' ,
                validator(value){
                    return ['top','left','right','bottom'].indexOf(value)>=0
                }
            },
            trigger:{
                type:String,
                default:'click',
                validator(value){
                    return ['click','hover'].indexOf(value)>=0
                }
            }
        },
        // watch:{
        //   visible(value){
        //       if(value){
        //           // appendChildToBody
        //           this.createPopoper()
        //       }
        //   }
        // },
        // created(){
        //   this.elementPosition=this.position
        // },
        // updated() {
        //     this.elementPosition=this.position
        // },
        beforeDestroy() {
            document.removeEventListener('click',this.listenDocument)
            if(this.trigger==='click'){
                this.$refs.popoverWrapper.removeEventListener('click', this.handleClick)
            }else{
                this.$refs.popoverWrapper.removeEventListener('mouseenter', this.open)

                this.$refs.contentWrapper.removeEventListener('mouseenter', this.open)
                this.$refs.contentWrapper.removeEventListener('mouseleave',this.close)
                this.$refs.popoverWrapper.removeEventListener('mouseleave',this.close)
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popoverWrapper.addEventListener('click', this.handleClick)
                // if(this.visible){
                    document.addEventListener('click',this.listenDocument)
                // }
            }
            if (this.trigger === 'hover') {
                this.$refs.popoverWrapper.addEventListener('mouseenter', this.open)

                this.$refs.contentWrapper.addEventListener('mouseenter', this.open)
                this.$refs.contentWrapper.addEventListener('mouseleave',this.close)
                this.$refs.popoverWrapper.addEventListener('mouseleave',this.close)
                // this.$refs.contentWrapper.addEventListener('mouseleave',(e)=>{
                //     console.log(e.target)
                //     this.close(
                // })
            }
        },
        methods:{
            createPopoper(){
                if(!this.popoperElem){
                    this.popoperElem = this.$refs.contentWrapper
                    document.body.appendChild(this.$refs.contentWrapper)
                }
            },
            style(key){

                let {left,top,bottom,right} = this.$refs.triggerWrapper.getBoundingClientRect()
                let {width,height} = this.$refs.contentWrapper.getBoundingClientRect()
                let bodyHeight = document.body.clientHeight;
                let bodyWidth = document.body.clientWidth
                if(key==='top'){
                    if(top<height+12){
                        key='bottom'
                    }
                }
                if(key==='bottom'){
                    if(bodyHeight-bottom<height+12){
                        key='top'
                    }
                }
                if(key==='left'){
                    if(left<width+12){
                        key='right'
                    }
                }
                if(key==='right'){
                    if(bodyWidth-right<width+12){
                        key='left'
                    }
                }
                this.elementPosition = key
                return this[`${key+'Style'}`]()
            },
            bottomStyle(){
                let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                return {
                    top:top+window.scrollY+height+'px',
                    left:left+window.scrollX+width/2+'px'
                }
            },
            topStyle(){
                let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                return {
                    top:top+window.scrollY+'px',
                    left:left+window.scrollX+width/2+'px'
                }
            },
            leftStyle(){
                let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                return {
                    top:top+window.scrollY+height/2+'px',
                    left:left+window.scrollX+'px'
                }
            },
            rightStyle(){
                let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                return {
                    top:top+window.scrollY+height/2+'px',
                    left:left+window.scrollX+width+'px'
                }
            },
            listenDocument(e){
                // 如果点击的事件源是popover则不响应
                if(!(this.$refs.popoverWrapper&&
                    (this.$refs.popoverWrapper===e.target
                        ||this.$refs.popoverWrapper.contains(e.target)
                        ||this.$refs.contentWrapper.contains(e.target))
                )){
                    this.close()
                    // document.removeEventListener('click',this.listenDocument)
                }
            },
            positionContent(){
                // let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                // this.$refs.contentWrapper.style.top=top+window.scrollY+height+'px'
                // this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
                let style = this.style(this.elementPosition)
                this.$refs.contentWrapper.style.top=style.top
                this.$refs.contentWrapper.style.left=style.left

            },
            open(){
                // console.log('打开')
                this.showContent=true
                // this.$emit('change',this.showContent)
                this.positionContent()
            },
            close(){
                // console.log('关闭')
              // this.close()
                this.showContent=false
                // this.$emit('change',this.showContent)
            },
            handleClick(e){
                //如果点击的是button，切换显示content
                if(this.$refs.triggerWrapper.contains(e.target)){
                    this.showContent=!this.showContent
                    // 如果是显示，给document添加事件，点击则关闭content
                    // if(this.showContent){
                        // this.$nextTick(()=>{
                        //     this.positionContent()
                        // this.open()
                        //     document.addEventListener('click',this.listenDocument)
                        // })
                    // }else{
                    //     //消除document的事件
                    //     document.removeEventListener('click',this.listenDocument)
                    // }
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    $border-color:#b4f2ff;

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
        padding:.5em;
        border:1px solid $border-color;
        border-radius:.3em;
        background-color:#fff;
        max-width:10em;
        min-width:5em;
        filter: drop-shadow(0 1px 2px #707070);
        word-break:break-all;

        ::after{
            position: absolute;
            content:"";
            display:block;
            width:0;
            height:0;
            border:12px solid transparent;


        }
        ::before{
            position: absolute;
            content:"";
            display:block;
            width:0;
            height:0;
            border:12px solid transparent;
        }
        &.bottom{
            margin-top:12px;
            transform:translateX(-50%);
            ::after{
                top:0;
                left:50%;
                /*left:1em;*/
                /*left:50%;*/
                transform: translate(-50%,calc( -100% + 1px));
                border-bottom-color: #fff;

            }
            ::before{
                top:0;
                left:50%;
                /*left:50%;*/
                transform: translate(-50%,-100%);
                border-bottom-color: $border-color;
            }
        }
        &.top{
            transform: translate(-50%,calc( -100% - 12px));
            ::after{
                bottom:0;
                left:50%;
                /*left:50%;*/
                transform: translate(-50%,calc( 100% - 1px));
                border-top-color: #fff;

            }
            ::before{
                bottom:0;
                left:50%;
                /*left:50%;*/
                transform: translate(-50%,100%);
                border-top-color: $border-color;
            }
        }
        &.left{
            transform: translate(calc( -100% - 12px),-50%);
            ::after{
                top:50%;
                right:0;
                /*left:1em;*/
                /*left:50%;*/
                transform: translate(calc( 100% - 1px),-50%);
                border-left-color: #fff;

            }
            ::before{
                top:50%;
                right:0;
                /*left:1em;*/
                /*left:50%;*/
                transform: translate(100%,-50%);
                border-left-color: $border-color;
            }
        }
        &.right{
            transform: translate( 12px,-50%);
            ::after{
                top:50%;
                left:0;
                /*left:1em;*/
                /*left:50%;*/
                transform: translate(calc( -100% + 1px),-50%);
                border-right-color: #fff;

            }
            ::before{
                top:50%;
                left:0;
                /*left:1em;*/
                /*left:50%;*/
                transform: translate(-100%,-50%);
                border-right-color: $border-color;
            }
        }
    }
</style>
