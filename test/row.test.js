import Vue from "vue"
import Row from "../src/row"
import Col from "../src/col"
Vue.config.productionTip=false;
Vue.config.devtools=false;

describe('Row组件',()=>{
    it('存在',()=>{
        expect(Row).to.exist
    })
    it('接收gutter',(done)=>{
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <g-row :gutter="12" >
        <g-col :span="12">1</g-col>
        <g-col :span="12">1</g-col>
        </g-row>
    `
        const vm = new Vue({
            el:div
        }).$mount()


        // let paddingLeft = col.getProperty('padding-left')
        // let paddingLeft = col.getAttribute('padding-left')
        // let paddingRight = col.getAttribute('padding-right')
        setTimeout(()=>{
            let col = vm.$el.querySelectorAll('.col')
            let {paddingLeft} = window.getComputedStyle(col[0])
            let {paddingRight}  = window.getComputedStyle(col[0])
            let {paddingLeft:paddingLeft2} = window.getComputedStyle(col[1])
            let {paddingRight:paddingRight2}  = window.getComputedStyle(col[1])
           expect(paddingLeft).to.equal('0px')
            expect(paddingRight).to.equal('6px')
            expect(paddingLeft2).to.equal('6px')
            expect(paddingRight2).to.equal('0px')
            done()
        },0)

    })
    it('接收align',(done)=> {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row :gutter="12" align="left">
        <g-col :span="12">1</g-col>
        <g-col :span="12">1</g-col>
        </g-row>
    `
        const vm = new Vue({
            el: div
        }).$mount()


        // let paddingLeft = col.getProperty('padding-left')
        // let paddingLeft = col.getAttribute('padding-left')
        // let paddingRight = col.getAttribute('padding-right')
        setTimeout(() => {
            let row = vm.$el.querySelector('.row')
            let {justifyContent} = window.getComputedStyle(row)
            expect(justifyContent).to.equal('flex-start')
            done()
        }, 0)
    })
    // expect(paddingLeft).to.equal('6px')
})
