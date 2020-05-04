import Tabs from "../src/tabs"
import TabPane from "../src/tab-pane"
import Vue from "vue"
Vue.component('g-tab-pane',TabPane)
Vue.component('g-tabs',Tabs)
Vue.config.devtools=false
Vue.config.productionTip=false
describe('tabs组件',()=>{
    it('存在',()=>{
        expect(Tabs).to.exist
    })
    // it('自组件只能是tab-pane',(done)=>{
    //     let div = document.createElement('div')
    //     div.innerHTML=`
    //         <g-tabs>
    //             <div>你好</div>
    //         </g-tabs>
    //     `
    //     expect(async()=>{
    //          await   new Vue({
    //                 el:div
    //             }).$mount()
    //         done()
    //     }).to.throw()
    //
    //
    // })
    it('接收selected',(done)=>{
        let div = document.createElement('div')
        div.innerHTML=`
            <g-tabs :selected="1">
                <g-tab-pane label="1">1</g-tab-pane>
                 <g-tab-pane label="2">2</g-tab-pane>
                 <g-tab-pane label="3">3</g-tab-pane>
                 <g-tab-pane label="4">4</g-tab-pane>
            </g-tabs>
        `
        let vm=new Vue({
            el:div
        }).$mount()
        vm.$nextTick(()=>{
            expect(vm.$el.querySelectorAll('.g-tab-head')[1].classList.contains('active')).to.be.true
            done()
        })
    })
    it('接收direction',(done)=>{
        let div = document.createElement('div')
        div.innerHTML=`
            <g-tabs :selected="1" direction="vertical">
                <g-tab-pane label="1">1</g-tab-pane>
                 <g-tab-pane label="2">2</g-tab-pane>
                 <g-tab-pane label="3">3</g-tab-pane>
                 <g-tab-pane label="4">4</g-tab-pane>
            </g-tabs>
        `

        document.body.appendChild(div)
        let vm=new Vue({
            el:div
        }).$mount()


        vm.$nextTick(()=>{
            let tabs = vm.$el.querySelector('.g-tabs')
            // console.log(tabs)
            let {flexDirection} = window.getComputedStyle(tabs)
            expect(flexDirection).to.equal('row')
            done()
        })

    })
})
