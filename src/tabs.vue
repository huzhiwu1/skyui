<script>
    import './tabs.scss'
    import TabHead from "./tab-head"
    import Vue from "vue"
    export default {
        name:'g-tabs',
        components:{
            TabHead
        },
        provide(){
            return {
                eventBus: this.eventBus
            }
        },
        props:{
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            },
            selected:{
                type:Number,
                default:null,
            }
        },
        data(){
            return {
                panes:[],
                eventBus:new Vue(),
                mySelected:0
            }
        },
        mounted(){
            console.log(this.$options)

            this.panes = this.$slots.default.filter(vnode=>vnode.tag&&vnode.componentOptions&&vnode.componentOptions.Ctor.options.name==='g-tab-pane')
            this.panes.forEach((item,index)=>{
                console.log(index,item)
                item.componentInstance.index=index
            })
            this.eventBus.$on('changTabIndex',(index)=>{
                this.selected? this.$emit('update:selected',index):this.mySelected=index
                // this.$emit('update:selected',index)

            })
        },
        render(h){
            let {
                panes,
                selected,
                mySelected,
                direction
            } = this
            const panels = (
                <div class="g-tab-panels">
                    {this.$slots.default}
                </div>
            )
            let navData= {
                props:{
                    panes,
                    selected:selected||mySelected
                },
                ref:'tab-head'
            }
            const heads = (
                <tab-head {...navData}></tab-head>
            )
            return (
                <div class="g-tabs" class={{'g-tabs':true,'column':direction==='vertical'}}>
                    {
                        [heads,panels]
                    }
                </div>
            )
        }
    }
</script>
