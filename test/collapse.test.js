import Vue from "vue"
import Collapse from "../src/collapse"
import CollapseItem from "../src/collapse-item"
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const expect = chai.expect
Vue.config.devtools=false
Vue.config.productionTip=false
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
describe('collapse组件',()=>{
    let vm = null;
    it('存在',()=>{
        expect(Collapse).to.exist
    })
    afterEach(()=>{
        vm&&vm.$destroy()
    })
    it('接受value',(done)=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
            <g-collapse :value="show">
                <g-collapse-item title="1" name="1">内容1</g-collapse-item>
                <g-collapse-item title="2" name="2">内容2</g-collapse-item>
                <g-collapse-item title="3" name="3">内容3</g-collapse-item>
            </g-collapse>
        `
        vm = new Vue({
            el:div,
            data(){
                return {
                    show:'3'
                }
            }
        }).$mount()
        vm.$nextTick(()=>{

            let content = vm.$el.querySelectorAll('.g-collapse-item-content')[2]
            let {display} = getComputedStyle(content)
            // console.log(display,'display')
            // console.log(content);
            expect(display).to.not.equal('none')
            done()
        })
    })
    it('双向绑定value',(done)=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
            <g-collapse v-model="show" accordion>
                <g-collapse-item title="1" name="1">内容1</g-collapse-item>
                <g-collapse-item title="2" name="2">内容2</g-collapse-item>
                <g-collapse-item title="3" name="3">内容3</g-collapse-item>
            </g-collapse>
        `
        vm = new Vue({
            el:div,
            data(){
                return {
                    show:'3'
                }
            }
        }).$mount()
        let header = vm.$el.querySelectorAll('.g-collapse-item-header')[0]
        header.click()
        vm.$nextTick(()=>{
            let show = vm.show
            console.log(show,'show')
            console.log(expect)
            expect(show).to.be.equalTo(['1'])
            done()
        })
    })
    it('接受accordion',(done)=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
            <g-collapse :value="show" accordion>
                <g-collapse-item title="1" name="1">内容1</g-collapse-item>
                <g-collapse-item title="2" name="2">内容2</g-collapse-item>
                <g-collapse-item title="3" name="3">内容3</g-collapse-item>
            </g-collapse>
        `
        vm = new Vue({
            el:div,
            data(){
                return {
                    show:'3'
                }
            }
        }).$mount()
        let header = vm.$el.querySelectorAll('.g-collapse-item-header')[0]
        header.click()
        vm.$nextTick(()=>{
            let content = vm.$el.querySelectorAll('.g-collapse-item-content')[2]
            let {display} = getComputedStyle(content)
            expect(display).to.equal('none')
            done()
        })

    })
} )
