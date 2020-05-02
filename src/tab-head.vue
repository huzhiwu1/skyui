<script>
    import TabBar from "./tab-bar"
    export default {
        name:'g-tab-head',
        components:{
            TabBar
        },
        props:{
            panes:Array,
            selected:{
                type:Number,
                required:true
            }
        },
        inject:['eventBus'],
       render(h){
            const {
                panes,
                selected,
                handleClick
            }=this

            let tabs = this._l(panes,(pane,index)=>{
                return <div class={{'g-tab-head':true,'active':index===selected}}  on-click={()=>handleClick(index)}>
                   {pane.componentInstance.$slots.label||pane.componentInstance.$options.propsData.label}
               </div>
           })
           return <div class="g-tab-heads" ref="tabs">
               {[tabs]}
               <tab-bar panes={panes}/>
                </div>
       },
        methods:{
            handleClick(index){
               this.eventBus.$emit('changTabIndex',index)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-tab-heads{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
