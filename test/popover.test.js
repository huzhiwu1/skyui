import Vue from "vue"
import Popover from "../src/popover"
import content from "../src/content";
Vue.config.productionTip=false;
Vue.config.devtools=false;
describe('popover组件',()=>{
    let Constructor = Vue.extend(Popover)
    let vm;
    afterEach(()=>{
        vm&&vm.$destroy()
    })
    it('存在',()=>{
        expect(Popover).to.exist
    })
    describe('porps',()=>{
        it('接收positon',()=>{
            vm = new Constructor({
                propsData:{
                    position:'top'
                }
            }).$mount()
            let contentWrap = vm.$el.querySelector('.contentWrapper')
            expect(contentWrap.classList.contains('top')).to.be.true
        })
        it('接收visible',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData:{
                    visible:true
                }
            })
            vm.$slots.default='按钮'
            vm.$slots.content='内容'
            vm.$mount(div)
            vm.$nextTick(()=>{
              expect(vm.showContent).to.be.true
                done()
            })



        })
        xit('双向绑定visible',(done)=>{
    //         let div = document.createElement('div')
    //         document.body.appendChild(div)
    //         Vue.component('g-popover',Popover)
    //         div.innerHTML=`
    //             <g-popover v-model="show">
    //             <template v-slot:content>我是内容</template>
    //             <div id="button">按钮</div>
    //             </g-popover>
    //         `
    //         vm = new Vue({
    //             el:div,
    //             data(){
    //                 return {
    //                     show: false
    //                 }
    //             }
    //         }).$mount()
    //             // vm.$el.querySelector('.contentWrapper').click()
    //         vm.$children[0].$refs.triggerWrapper.click()
    //         setTimeout(()=>{
    // // console.log( vm.$children[0].showContent)
    //             expect(vm.$data.show).to.be.true
    //             done()
    //         },000)

        })
    })
    describe('事件,',()=>{
        xit('接收点击事件',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData:{
                    trigger:'click'
                }
            }).$mount(div)
            let event = new Event('click')
           vm.$el.dispatchEvent(event)
            // vm.$el.click()
            vm.$nextTick(()=>{

              vm.$nextTick(()=>{
                  let contentWrapper = vm.$el.querySelector('.contentWrapper')
                  let {display} = contentWrapper.style
                  console.log(contentWrapper.parentElement)
                  console.log(display,'dis')
                  expect(display).to.not.equal('none')
                  done()
              })
            })
        })
    })
})
